# nc-api — Documentación para Frontend (Dashboard)

> **Propósito**: Este documento describe el estado actual del backend (nc-api), su arquitectura, los endpoints existentes, los planificados, y la hoja de ruta futura. Está pensado para que el desarrollador del frontend (nc-dashboard) entienda qué hay y qué falta.

---

## 1. Stack Actual

| Capa | Tecnología |
|------|-----------|
| **Framework** | FastAPI (Python 3.12) |
| **Runtime** | uv + uvicorn |
| **WhatsApp** | Meta WhatsApp Cloud API v22.0 |
| **IA** | Groq API — LLaMA 3 70B |
| **HTTP Client** | httpx (async) |
| **Config** | pydantic-settings + .env |
| **Logging** | loguru |
| **Hosting** | Railway (nunca-cierro.up.railway.app) |
| **Repos** | `github.com/nunca-cierro/nc-api` |

---

## 2. Estado Actual de la App de Meta

| Item | Estado |
|------|--------|
| **System User Token** | ✅ Creado, permanente (caducidad: Never) |
| **Webhook** | ✅ Configurado y verificando en Railway |
| **Business Verification** | ⏳ Enviada, esperando respuesta (~2 días hábiles) |
| **App Published** | ❌ Pendiente de verificación |
| **Número de prueba** | ✅ Activo (solo mensajes de prueba) |
| **Número real colombiano** | ❌ Pendiente de registrar |

> Mientras la app no esté publicada, solo recibe mensajes de números de prueba. Los mensajes reales de clientes no llegan al webhook.

---

## 3. Arquitectura del Backend

```
webhook (WhatsApp Cloud API → Railway)
    │
    ▼
bot/router.py ──── GET /webhook (verificación)
                   POST /webhook (mensajes entrantes)
                   GET  /health
    │
    ▼
bot/handler.py ──── extract_message() → handle_incoming()
    │
    ├── Resuelve negocio por phone_number_id (businesses/*.json)
    │
    ▼
bot/responder.py ── match_keyword() → respuesta instantánea (FREE)
                    respond()       → fallback a Groq AI (si el plan lo incluye)
    │                        ▲
    ├── bot/groq_client.py ──┘
    │
    ▼
bot/whatsapp.py ──── send_text_message() → WhatsApp Cloud API
```

### Flujo de un mensaje

```
1. Cliente escribe al número de WhatsApp del negocio
2. Meta envía POST al webhook con el mensaje + phone_number_id
3. handler.py busca qué negocio tiene ese phone_number_id en businesses/
4. responder.py intenta matchear con keywords (gratis, instantáneo)
5. Si no hay match → fallback a Groq AI (solo plan Professional+)
6. whatsapp.py envía la respuesta de vuelta al cliente
```

---

## 4. Estructura de Datos (Businesses)

### businesses/<slug>.json (git trackeado — solo config)

Actualmente existen 4 archivos de negocio:

```json
{
  "business_name": "NuncaCierro",            // Nombre comercial
  "phone_number_id": "1328965352380089",      // ID del número en Meta (NO es secreto)
  "hours": "24 horas, los 365 días del año", // Horarios
  "description": "Automatización WhatsApp...",// Descripción
  "plan": "professional",                     // basic | professional | enterprise
  "pricing_basic": "desde $60.000/mes",      // Precios referencia
  "pricing_professional": "desde $200.000/mes",
  "pricing_enterprise": "desde $320.000/mes",
  "setup_time": "48 horas",
  "keywords": {                               // Palabras clave → respuesta
    "qué es|que es|...": "Somos un servicio...",
    "cuánto cuesta|...": "Tenemos planes...",
    ...
  },
  "system_prompt": "Eres Nicolas..."          // Prompt para IA (plan Profesional+)
}
```

> ⚠️ **No hay BD aún.** Todo el estado vive en archivos JSON. En producción futura se migrará a una base de datos.

### Archivos existentes

| Archivo | Negocio | Estado |
|---------|---------|--------|
| `nunca-cierro.json` | NuncaCierro (la empresa misma) | ✅ Real, activo |
| `restaurante.json` | Restaurante Élite | 🟡 Demo / Placeholder |
| `barberia.json` | Barbería King's | 🟡 Demo / Placeholder |
| `dental.json` | DentalCare Plus | 🟡 Demo / Placeholder |

### businesses/credentials.json (gitignored — solo en servidor)

```json
{
  "1328965352380089": {
    "token": "EAA...",
    "phone_number_id": "1328965352380090"
  }
}
```

> Contiene los tokens por número de teléfono. No se sube al repo. Se usa cuando hay múltiples WABAs con distintos tokens.

---

## 5. Environment Variables

```env
# Meta WhatsApp Cloud API
WHATSAPP_TOKEN="EAA..."                      # Token permanente (System User)
WHATSAPP_PHONE_NUMBER_ID="1328965352380089"  # ID del número principal (fallback)
WHATSAPP_VERIFY_TOKEN="nuncacierro2026"      # Token de verificación del webhook
WHATSAPP_API_VERSION="v22.0"
WHATSAPP_BASE_URL="https://graph.facebook.com"

# Groq AI
GROQ_API_KEY="gsk_..."
GROQ_MODEL="llama-3.3-70b-versatile"
GROQ_MAX_TOKENS=512
GROQ_TEMPERATURE=0.7
GROQ_RATE_LIMIT_RPM=30

# App
APP_NAME="NuncaCierro WhatsApp Bot"
APP_PORT=8000
APP_HOST="0.0.0.0"
LOG_LEVEL="INFO"
```

---

## 6. Endpoints Actuales (Backend)

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/health` | Health check → `{"status":"ok"}` |
| `GET` | `/webhook?hub.mode=subscribe&hub.verify_token=...&hub.challenge=...` | Verificación del webhook con Meta |
| `POST` | `/webhook` | Recibir mensajes entrantes de WhatsApp |

**URL base:** `https://nunca-cierro.up.railway.app`

---

## 7. Endpoints del Dashboard

> Todos los endpoints están implementados en `bot/api.py` y accesibles bajo `/api`.

| Método | Ruta | Descripción | Estado |
|--------|------|-------------|--------|
| `GET` | `/api/businesses` | Listar todos los negocios | ✅ Implementado |
| `GET` | `/api/businesses/{id}` | Obtener detalle de un negocio | ✅ Implementado |
| `PATCH` | `/api/businesses/{id}/plan` | Cambiar plan (basic/professional/enterprise) | ✅ Implementado |
| `GET` | `/api/businesses/{id}/usage` | Estadísticas de uso del negocio | ✅ Implementado |
| `GET` | `/api/usage/summary` | Resumen global de uso (todos los negocios) | ✅ Implementado |
| `POST` | `/api/businesses` | Crear nuevo negocio | ❌ Pendiente |
| `DELETE` | `/api/businesses/{id}` | Eliminar negocio | ❌ Pendiente |

### Respuesta esperada de GET /api/businesses

```json
[
  {
    "id": "nunca-cierro",
    "name": "NuncaCierro",
    "plan": "professional",
    "phone": "+57 300 xxx xxxx",
    "phone_number_id": "1328965352380089",
    "keywords_count": 12,
    "status": "active",
    "created_at": "2026-05-01"
  },
  {
    "id": "restaurante",
    "name": "Restaurante Élite",
    "plan": "basic",
    "phone": "+57 300 xxx xxxx",
    "phone_number_id": "123456789",
    "keywords_count": 5,
    "status": "demo",
    "created_at": "2026-05-01"
  }
]
```

### Respuesta real de GET /api/businesses/{id}/usage

```json
{
  "business_id": "nunca-cierro",
  "month": "2026-05",
  "total": 1450,
  "keyword": 1200,
  "ai": 250,
  "plan": "professional",
  "limit": null
}
```

> `limit` es `500` para plan basic, `null` para professional/enterprise (ilimitado).

### Respuesta real de GET /api/usage/summary

```json
{
  "month": "2026-05",
  "total_messages": 3200,
  "keyword_matches": 2800,
  "ai_responses": 400,
  "business_count": 4,
  "active_count": 1
}
```

> `active_count` = negocios con phone_number_id real (no demo).

---

## 8. Planes y Precios (desde el backend)

Los planes se definen en cada `businesses/*.json` con el campo `"plan"`:

| Plan | Campo | Características |
|------|-------|-----------------|
| Básico | `"basic"` | Solo keywords, 500 respuestas/mes, sin IA |
| Profesional | `"professional"` | Keywords + IA (Groq), respuestas ilimitadas, hasta 3 negocios |
| Empresarial | `"enterprise"` | Todo lo anterior + API + dashboard + negocios ilimitados |

Precios de referencia (desde `BRAND.md`):
- Básico: desde $60.000/mes
- Profesional: desde $200.000/mes
- Empresarial: desde $320.000/mes

---

## 9. Hoja de Ruta (Futuro)

### Fase 1 — MVP Actual (✅ Listo)
- [x] Webhook de WhatsApp funcionando
- [x] Keyword matching (gratis, instantáneo)
- [x] Fallback a Groq AI
- [x] Multi-negocio via archivos JSON
- [x] Planes (basic, professional, enterprise) con límites
- [x] Token permanente de Meta (System User, nunca expira)
- [x] Sin secrets en el repo (credentials.json gitignored)
- [x] Deploy en Railway

### Fase 2 — Dashboard (🔜 Próximo)
- [ ] API REST para CRUD de negocios
- [ ] Autenticación básica (admin único)
- [ ] Listado de negocios con plan y estado
- [ ] Cambio de plan desde el panel
- [ ] Estadísticas de uso (mensajes, keywords vs AI, usuarios únicos)
- [ ] Onboarding de nuevos negocios desde el frontend

### Fase 3 — Producción (🚧 Pendiente de Business Verification)
- [ ] Publicar app de Meta
- [ ] Registrar número real colombiano
- [ ] Dominio fijo (reemplazar Railway.app por dominio propio)
- [ ] Endpoint de pago (Epayco, Wompi, Bold)
- [ ] Facturación automática mensual

### Fase 4 — Escalamiento (📋 Planificado)
- [ ] Base de datos (PostgreSQL / Supabase)
- [ ] Migrar de JSON a DB
- [ ] Sesiones / memoria de conversación (Redis)
- [ ] Dashboard para clientes (ver sus propias stats)
- [ ] Webhooks para eventos (nuevo lead, límite alcanzado, etc.)
- [ ] API pública documentada (OpenAPI)

---

## 10. Consideraciones Técnicas

### Seguridad
- Los tokens de Meta viven en `.env` (gitignored) o en `businesses/credentials.json` (gitignored)
- Los archivos `businesses/*.json` solo tienen config de negocio (NO tokens)
- El `phone_number_id` NO es un secreto — aparece en cada webhook que Meta envía
- Autenticación del dashboard: pendiente de implementar

### Despliegue
- Railway auto-detecta Python y usa `Procfile` para arrancar
- Comando de inicio: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- Las variables de entorno se configuran en Railway Dashboard
- Los archivos JSON de businesses se despliegan con el repo (git trackeados)

### Costos
- **Meta**: Solo cobra por mensajes template enviados. Service messages (responder a clientes) son GRATIS
- **Groq**: Tier gratis (30 req/min). Suficiente para MVP
- **Railway**: Plan gratis con créditos iniciales. Después ~$5-10 USD/mes
- **ngrok**: Ya no se usa en producción. Reemplazado por Railway

---

## 11. Links Útiles

| Recurso | URL |
|---------|-----|
| Backend en producción | `https://nunca-cierro.up.railway.app` |
| Health check | `https://nunca-cierro.up.railway.app/health` |
| Repo backend | `https://github.com/nunca-cierro/nc-api` |
| Repo frontend | `https://github.com/nunca-cierro/nc-dashboard` |
| Manual de marca | `nc-api/BRAND.md` |
| Mensajes de ventas | `nc-api/MENSAJES.md` |
| Config de backend | `nc-api/AGENTS.md` |

---

## 12. Changelog

| Fecha | Versión | Cambio |
|-------|---------|--------|
| 2026-05-12 | 1.0 | Documento inicial con estado actual y roadmap |
