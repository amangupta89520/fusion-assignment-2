import { useSelector } from "react-redux";
import ChatList from "./components/ChatList/ChatList";
import GetStartedModal from "./components/GetStartedModal/GetStartedModal";
import Modal from "react-modal";
import type { RootState } from "./store/store";
import ChatArea from "./components/ChatArea/ChatArea";
import { cn } from "./lib/utils";

Modal.setAppElement('#root');

function App() {

  const currentUser = useSelector((state: RootState) => state.user.users[0]);
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);

  return (
    <div className={cn('flex')}>
      {!currentUser && <GetStartedModal />}
      {currentUser && <ChatList />}
      {currentChat? <ChatArea /> : <div className="w-full flex items-center justify-center text-4xl font-bold">Welcome to our app</div>}
    </div>
  )
}

export default App
