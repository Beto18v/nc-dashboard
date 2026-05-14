import { describe, expect, it } from "vitest";

import {
  getRoleLandingRoute,
  isRouteAllowed,
  type Role,
} from "@/lib/rbac";

const roles: Role[] = ["admin", "basic", "professional", "enterprise"];

describe("RBAC route matrix", () => {
  it.each(roles)("allows /admin/dashboard for %s", (role) => {
    expect(isRouteAllowed(role, "/admin/dashboard")).toBe(true);
  });

  it.each(roles)("allows /login for %s", (role) => {
    expect(isRouteAllowed(role, "/login")).toBe(true);
  });

  it.each(roles)("denies /admin/settings for %s", (role) => {
    expect(isRouteAllowed(role, "/admin/settings")).toBe(false);
  });

  it.each(roles)("returns /admin/dashboard as landing for %s", (role) => {
    expect(getRoleLandingRoute(role)).toBe("/admin/dashboard");
  });
});
