"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { ApiError } from "@/lib/api";
import { isAuthEnabled } from "@/lib/config";
import { Loader2, ShieldCheck } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Exported page                                                      */
/* ------------------------------------------------------------------ */

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}

/* ------------------------------------------------------------------ */
/*  Inner form (uses useSearchParams → needs Suspense)                 */
/* ------------------------------------------------------------------ */

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const reason = searchParams.get("reason");
    if (reason === "unauthorized") {
      setError("No tienes permisos para acceder a esa sección.");
    }
  }, [searchParams]);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await login(email, password);
      router.replace("/dashboard");
    } catch (err) {
      if (err instanceof ApiError) {
        switch (err.status) {
          case 429:
            setError("Demasiados intentos. Cuenta bloqueada temporalmente.");
            break;
          case 401:
            setError("Credenciales inválidas.");
            break;
          case 422:
            setError("Por favor ingresa email y contraseña.");
            break;
          default:
            setError("Error del servidor. Intenta de nuevo.");
            break;
        }
      } else {
        setError("Error de conexión. Verifica tu conexión a internet.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoLogin = async () => {
    setError("");
    setIsSubmitting(true);
    try {
      await login("demo@demo.com", "demo");
      router.replace("/dashboard");
    } catch {
      setError("Error al iniciar sesión demo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-4">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">
              NuncaCierro
            </CardTitle>
            <p className="text-muted-foreground mt-1 text-sm">
              Panel de administración
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div
                  role="alert"
                  className="rounded-md bg-destructive/10 px-3 py-2.5 text-sm text-destructive"
                >
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@nuncacierro.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  autoFocus
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Contraseña
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  "Iniciar Sesión"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* ── Demo / offline mode quick access ── */}
        {!isAuthEnabled && (
          <Card className="w-full border-dashed border-amber-300 dark:border-amber-700">
            <CardContent className="pt-6">
              <div className="text-center">
                <ShieldCheck className="mx-auto mb-2 size-8 text-amber-500" />
                <p className="mb-1 text-sm font-medium text-amber-700 dark:text-amber-400">
                  Modo Demo
                </p>
                <p className="mb-4 text-xs text-muted-foreground">
                  Sin conexión al backend. Haz clic para acceder como
                  administrador de prueba.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-400 dark:hover:bg-amber-950"
                  onClick={handleDemoLogin}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      Accediendo...
                    </>
                  ) : (
                    "Acceder como Admin (Demo)"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
