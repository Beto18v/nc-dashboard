/* ------------------------------------------------------------------ */
/*  Application configuration                                          */
/* ------------------------------------------------------------------ */

/**
 * When `NEXT_PUBLIC_AUTH_DISABLED` is set to `"true"`, the app runs in
 * offline / demo mode:
 *  - No real API calls for login, profile fetch, token refresh.
 *  - A hard‑coded demo user is injected so the admin panel is reachable.
 *
 * To re‑enable authentication delete the env var (or set it to `"false"`).
 */
export const isAuthEnabled = !(
  typeof process !== "undefined" &&
  process.env?.NEXT_PUBLIC_AUTH_DISABLED === "true"
);

/* ── Demo / offline user ── */
import type { AuthUser } from "@/lib/api";

export const DEMO_USER: AuthUser = {
  email: "admin@nuncacierro.com",
  name: "Admin Demo",
  role: "admin",
  business_id: null,
};
