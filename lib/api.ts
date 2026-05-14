"use client";

/* ------------------------------------------------------------------ */
/*  Token storage keys                                                 */
/* ------------------------------------------------------------------ */

export const TOKEN_KEYS = {
  access: "nc_access_token",
  refresh: "nc_refresh_token",
  user: "nc_user",
} as const;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface AuthUser {
  email: string;
  name: string;
  role: "admin" | "basic" | "professional" | "enterprise";
  business_id: string | null;
}

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

/* ------------------------------------------------------------------ */
/*  JWT helpers (client-side expiry check only — no signature verify)  */
/* ------------------------------------------------------------------ */

export function decodeTokenPayload(
  token: string,
): Record<string, unknown> | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const raw = parts[1];
    const normalized = raw.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(
      normalized.length + ((4 - (normalized.length % 4)) % 4),
      "=",
    );
    return JSON.parse(atob(padded));
  } catch {
    return null;
  }
}

export function isTokenExpired(token: string): boolean {
  const payload = decodeTokenPayload(token);
  if (!payload || !payload.exp) return true;
  return (payload.exp as number) * 1000 < Date.now();
}

/* ------------------------------------------------------------------ */
/*  Refresh helper (plain fetch — no circular deps with apiClient)     */
/* ------------------------------------------------------------------ */

async function tryRefreshToken(): Promise<boolean> {
  const storedRefresh = localStorage.getItem(TOKEN_KEYS.refresh);
  if (!storedRefresh) return false;

  try {
    const res = await fetch("/api/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: storedRefresh }),
    });
    if (!res.ok) return false;

    const data = await res.json();
    localStorage.setItem(TOKEN_KEYS.access, data.access_token);
    localStorage.setItem(TOKEN_KEYS.refresh, data.refresh_token);
    return true;
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------ */
/*  Clear auth and redirect to login                                   */
/* ------------------------------------------------------------------ */

export function clearAuthAndRedirect(): void {
  localStorage.removeItem(TOKEN_KEYS.access);
  localStorage.removeItem(TOKEN_KEYS.refresh);
  localStorage.removeItem(TOKEN_KEYS.user);
  if (typeof window !== "undefined") {
    window.location.href = "/auth/login";
  }
}

/* ------------------------------------------------------------------ */
/*  Authenticated fetch wrapper                                        */
/* ------------------------------------------------------------------ */

export async function apiClient<T = unknown>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  let accessToken = localStorage.getItem(TOKEN_KEYS.access);

  /* Pre-emptive refresh if token is already expired */
  if (accessToken && isTokenExpired(accessToken)) {
    const refreshed = await tryRefreshToken();
    if (refreshed) {
      accessToken = localStorage.getItem(TOKEN_KEYS.access);
    } else {
      accessToken = null;
    }
  }

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  let response = await fetch(endpoint, { ...options, headers });

  /* 401 → refresh → retry once */
  if (response.status === 401) {
    const refreshed = await tryRefreshToken();
    if (refreshed) {
      const newToken = localStorage.getItem(TOKEN_KEYS.access);
      headers["Authorization"] = `Bearer ${newToken}`;
      response = await fetch(endpoint, { ...options, headers });

      if (response.ok) {
        return response.status === 204 ? (undefined as T) : response.json();
      }
    }

    clearAuthAndRedirect();
    throw new ApiError(401, "Unauthorized");
  }

  if (!response.ok) {
    const text = await response.text();
    throw new ApiError(response.status, text);
  }

  return response.status === 204 ? (undefined as T) : response.json();
}

/* ------------------------------------------------------------------ */
/*  Auth-specific endpoints (plain fetch — no auth interceptor)        */
/* ------------------------------------------------------------------ */

export async function login(
  email: string,
  password: string,
): Promise<{ access_token: string; refresh_token: string; user: AuthUser }> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new ApiError(response.status, text);
  }

  const data = await response.json();
  localStorage.setItem(TOKEN_KEYS.access, data.access_token);
  localStorage.setItem(TOKEN_KEYS.refresh, data.refresh_token);
  localStorage.setItem(TOKEN_KEYS.user, JSON.stringify(data.user));
  return data;
}

export async function refreshToken(
  refreshTokenValue: string,
): Promise<{ access_token: string; refresh_token: string }> {
  const response = await fetch("/api/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshTokenValue }),
  });

  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }

  const data = await response.json();
  localStorage.setItem(TOKEN_KEYS.access, data.access_token);
  localStorage.setItem(TOKEN_KEYS.refresh, data.refresh_token);
  return data;
}

export async function getProfile(): Promise<AuthUser> {
  return apiClient<AuthUser>("/api/auth/me");
}
