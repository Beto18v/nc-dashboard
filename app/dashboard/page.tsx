"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MessageSquare, Users, BarChart3 } from "lucide-react";

const STAT_CARDS = [
  { title: "Negocios", value: "--", icon: Building2 },
  { title: "Leads", value: "--", icon: Users },
  { title: "Mensajes", value: "--", icon: MessageSquare },
  { title: "Uso API", value: "--", icon: BarChart3 },
] as const;

const NAV_PLACEHOLDERS = ["Negocios", "Leads", "Uso"];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* ── Welcome ── */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Bienvenido, {user?.name ?? user?.email ?? "Usuario"}
        </p>
      </div>

      {/* ── Stat cards ── */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAT_CARDS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Próximamente
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* ── Navigation placeholders ── */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Secciones</h2>
        <nav className="flex flex-wrap gap-2">
          {NAV_PLACEHOLDERS.map((item) => (
            <span
              key={item}
              className="cursor-default rounded-md border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
