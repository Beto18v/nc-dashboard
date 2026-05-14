"use client";

import { useConversations } from "@/hooks/use-conversations";
import { ConversationList } from "@/app/dashboard/conversations/components/conversation-list";

export default function ConversationsPage() {
  const { conversations, isLoading, error } = useConversations({ limit: 50 });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Conversaciones</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Mensajes de WhatsApp entrantes y salientes.
        </p>
      </div>

      <ConversationList
        conversations={conversations}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
