"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { getRoleLandingRoute, isRouteAllowed, type Role } from "@/lib/rbac";
import { isAuthEnabled } from "@/lib/config";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  /* ── Auth guard: redirect to login if not authenticated ── */
  useEffect(() => {
    if (!isAuthEnabled) return; /* Offline mode — no guard needed */

    if (!isLoading && !isAuthenticated) {
      router.replace("/auth/login");
    }
  }, [isLoading, isAuthenticated, pathname, router]);

  useEffect(() => {
    if (!isAuthEnabled) return; /* Offline mode — no RBAC guard needed */

    if (!isLoading && isAuthenticated && user?.role) {
      const role = user.role as Role;
      if (!isRouteAllowed(role, pathname)) {
        const landing = getRoleLandingRoute(role);
        router.replace(`${landing}?reason=unauthorized`);
      }
    }
  }, [isLoading, isAuthenticated, pathname, router, user?.role]);

  /* ── In offline mode, skip loading state — user is always ready ── */
  if (!isAuthEnabled) {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
            <div>
              <span className="text-lg font-bold tracking-tight">
                NuncaCierro Admin
              </span>
              <span className="ml-3 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                Demo
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-muted-foreground sm:inline">
                {user?.name ?? user?.email}
              </span>

              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="mr-2 size-4" />
                <span className="hidden sm:inline">Cerrar Sesión</span>
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ── Top bar ── */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <span className="text-lg font-bold tracking-tight">
            NuncaCierro Admin
          </span>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user?.name ?? user?.email}
            </span>

            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="mr-2 size-4" />
              <span className="hidden sm:inline">Cerrar Sesión</span>
            </Button>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
    </div>
  );
}
