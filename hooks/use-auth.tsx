"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  login as apiLogin,
  getProfile as apiGetProfile,
  refreshToken as apiRefreshToken,
  isTokenExpired,
  clearAuthAndRedirect,
  type AuthUser,
  TOKEN_KEYS,
} from "@/lib/api";
import { isAuthEnabled, DEMO_USER } from "@/lib/config";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function handleAuthMeFailure(
  setUser: (user: AuthUser | null) => void,
): void {
  setUser(null);
  clearAuthAndRedirect();
}

/* ------------------------------------------------------------------ */
/*  Provider                                                           */
/* ------------------------------------------------------------------ */

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /* ── Mount: try silent auth — in offline mode, wait for user action ── */
  useEffect(() => {
    if (!isAuthEnabled) {
      /* Offline mode — user must click "demo" on login page */
      setIsLoading(false);
      return;
    }

    const init = async () => {
      try {
        const accessToken = localStorage.getItem(TOKEN_KEYS.access);
        const refreshTokenValue = localStorage.getItem(TOKEN_KEYS.refresh);

        if (!accessToken && !refreshTokenValue) {
          setIsLoading(false);
          return;
        }

        /* If access token is expired but a refresh token exists, refresh first */
        let validAccess = accessToken;
        if (accessToken && isTokenExpired(accessToken) && refreshTokenValue) {
          try {
            const data = await apiRefreshToken(refreshTokenValue);
            validAccess = data.access_token;
          } catch {
            /* Refresh failed — cannot recover, clear state */
            clearAuthAndRedirect();
            setIsLoading(false);
            return;
          }
        }

        /* Try to fetch the user profile with a (now) valid token */
        if (validAccess && !isTokenExpired(validAccess)) {
          try {
            const profile = await apiGetProfile();
            setUser(profile);
            localStorage.setItem(TOKEN_KEYS.user, JSON.stringify(profile));
          } catch {
            /* Fail closed: never trust cached user when /auth/me fails */
            handleAuthMeFailure(setUser);
            setIsLoading(false);
            return;
          }
        }
      } catch {
        /* Silent — user stays unauthenticated */
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  /* ── Periodic token expiry check (every 5 min) — only when auth is enabled ── */
  useEffect(() => {
    if (!isAuthEnabled) return;

    const interval = setInterval(() => {
      const accessToken = localStorage.getItem(TOKEN_KEYS.access);
      const refreshTokenValue = localStorage.getItem(TOKEN_KEYS.refresh);

      if (accessToken && isTokenExpired(accessToken) && refreshTokenValue) {
        apiRefreshToken(refreshTokenValue).catch(() => {
          clearAuthAndRedirect();
        });
      }
    }, 300_000); /* 5 minutes */

    return () => clearInterval(interval);
  }, []);

  /* ── Login ── */
  const login = useCallback(async (_email: string, _password: string) => {
    if (!isAuthEnabled) {
      /* Offline mode — just set the demo user */
      setUser(DEMO_USER);
      return;
    }

    const data = await apiLogin(_email, _password);
    setUser(data.user);
  }, []);

  /* ── Logout ── */
  const logout = useCallback(() => {
    if (!isAuthEnabled) {
      /* Offline mode — just clear user, no redirect */
      setUser(null);
      return;
    }

    localStorage.removeItem(TOKEN_KEYS.access);
    localStorage.removeItem(TOKEN_KEYS.refresh);
    localStorage.removeItem(TOKEN_KEYS.user);
    setUser(null);
    clearAuthAndRedirect();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  Hook                                                               */
/* ------------------------------------------------------------------ */

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
