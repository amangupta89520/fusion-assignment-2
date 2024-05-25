import { useSelector } from "react-redux";
import { cn } from "../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { RootState } from "../../store/store";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

const ChatArea = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentChat)!;

  return (
    <div className={cn("w-3/4 h-screen flex flex-col")}>
      <div className={cn("bg-gray-50 p-2 px-4 border-b cursor-pointer flex items-center space-x-4")}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>{currentChat.participants[0].username}</span>
      </div>
      <MessageList />
      <SendMessage />
    </div>
  );
};

export default ChatArea;
