"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Building2,
  Bot,
  Phone,
  MessageSquare,
  LogOut,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Navigation items                                                    */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/tenants", label: "Negocios", icon: Building2 },
  { href: "/dashboard/agents", label: "Agentes", icon: Bot },
  { href: "/dashboard/whatsapp", label: "WhatsApp", icon: Phone },
  { href: "/dashboard/conversations", label: "Conversaciones", icon: MessageSquare },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="flex h-full w-56 flex-col border-r bg-background">
      {/* ── Logo ── */}
      <div className="flex h-14 items-center border-b px-4">
        <span className="text-lg font-bold tracking-tight">
          NuncaCierro
        </span>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 space-y-1 p-3">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Icon className="size-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* ── User + Logout ── */}
      <div className="border-t p-3">
        <div className="mb-2 truncate px-3 text-xs text-muted-foreground">
          {user?.name ?? user?.email}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={logout}
          className="w-full justify-start gap-3"
        >
          <LogOut className="size-4" />
          Cerrar Sesión
        </Button>
      </div>
    </aside>
  );
}
