import { Loader2 } from "lucide-react";

interface ToolCallBadgeProps {
  toolName: string;
  state: string;
  result?: unknown;
}

export function ToolCallBadge({ toolName, state, result }: ToolCallBadgeProps) {
  const isDone = state === "result" && result;
  return (
    <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 bg-neutral-50 rounded-lg text-xs font-mono border border-neutral-200">
      {isDone ? (
        <>
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-neutral-700">{toolName}</span>
        </>
      ) : (
        <>
          <Loader2 className="w-3 h-3 animate-spin text-blue-600" />
          <span className="text-neutral-700">{toolName}</span>
        </>
      )}
    </div>
  );
}
