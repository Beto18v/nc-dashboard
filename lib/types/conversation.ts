/* ------------------------------------------------------------------ */
/*  Conversation — 1:1 con ConversationResponse del backend            */
/* ------------------------------------------------------------------ */

export interface Conversation {
  id: string;
  tenant_id: string;
  whatsapp_number_id: string;
  wa_user_id: string;
  status: string;
  summary: string | null;
  last_message_at: string | null;
  message_count: number;
  created_at: string;
  updated_at: string;
}

/* ------------------------------------------------------------------ */
/*  Message — 1:1 con MessageResponse del backend                       */
/* ------------------------------------------------------------------ */

export interface Message {
  id: string;
  conversation_id: string;
  direction: string;
  wa_message_id: string | null;
  wa_user_id: string;
  message_type: string;
  content: string | null;
  status: string;
  payload: Record<string, unknown> | null;
  error_message: string | null;
  created_at: string;
}
