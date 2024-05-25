import { useSelector } from "react-redux";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { type RootState } from "../../store/store";
import ChatItem from "./ChatItem";
import { cn } from "../../lib/utils";

const ChatList = () => {

  const chats = useSelector((state: RootState) => state.chat.chats);
  const userData = useSelector((state: RootState) => state.user.users[0]);

  return (
    <div className={cn('w-1/4 border-r h-screen p-4 space-y-4')}>
      <div>
        <p className={cn('text-sm')}>Hello, {userData?.username}</p>
        <h1 className={cn('font-extrabold text-3xl pb-2')}>Chats</h1>
        <Input placeholder="Search" />
      </div>
      <ScrollArea>
        {chats.length > 0 && chats.map(chat => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </ScrollArea>
    </div>
  );
}
 
export default ChatList;