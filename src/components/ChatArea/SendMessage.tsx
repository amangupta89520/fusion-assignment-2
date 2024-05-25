import { useRef, type FormEvent } from "react";
import { cn } from "../../lib/utils";
import { Input } from "../ui/input";
import { RocketIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { chatActions } from "../../store/slices/chat";

const SendMessage = () => {

  const formRef = useRef<null | HTMLFormElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const currentChat = useSelector((state: RootState) => state.chat.currentChat)!;
  const currentUser = useSelector((state: RootState) => state.user.users[0]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const enteredValue = formRef.current?.messageInpt?.value?.trim();
    if(enteredValue) {
      const message = {
        content: enteredValue,
        sent_by: currentUser.id,
        arrival_time: Date.now()
      }
      dispatch(chatActions.sendMessage({
        chatId: currentChat.id,
        message
      }));
    }
    formRef.current?.reset();
  }

  return (
    <div className={cn("mt-auto border-t p-4")}>
      <form ref={formRef} onSubmit={handleSubmit} className={cn("flex items-center space-x-4")}>
        <Input placeholder="Enter your message..." className={cn('w-full')} type="text" name="messageInpt" />
        <RocketIcon type="submit" className={cn('cursor-pointer bg-gray-100 size-6')} />
      </form>
    </div>
  );
}
 
export default SendMessage;