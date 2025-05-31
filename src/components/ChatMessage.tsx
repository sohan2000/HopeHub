
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  text: string;
  isUser: boolean;
}

const ChatMessage = ({ text, isUser }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "w-fit max-w-[80%] rounded-2xl px-4 py-3 text-lg",
        isUser
          ? "ml-auto bg-[#F2FCE2] text-gray-800"
          : "bg-white text-gray-800 shadow-sm"
      )}
    >
      {text.split('\n').map((line, i) => (
        <p key={i} className="min-h-[1.5em]">
          {line}
        </p>
      ))}
    </div>
  );
};

export default ChatMessage;
