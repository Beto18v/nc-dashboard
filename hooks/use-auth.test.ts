import { describe, expect, it, vi } from "vitest";

import type { AuthUser } from "@/lib/api";
import { handleAuthMeFailure } from "@/hooks/use-auth";

vi.mock("@/lib/api", async () => {
  const actual = await vi.importActual<typeof import("@/lib/api")>("@/lib/api");
  return {
    ...actual,
    clearAuthAndRedirect: vi.fn(),
  };
});

import { clearAuthAndRedirect } from "@/lib/api";

describe("handleAuthMeFailure", () => {
  it("clears in-memory user and redirects to login path", () => {
    const setUser = vi.fn<(user: AuthUser | null) => void>();

    handleAuthMeFailure(setUser);

    expect(setUser).toHaveBeenCalledWith(null);
    expect(clearAuthAndRedirect).toHaveBeenCalledTimes(1);
  });
});
