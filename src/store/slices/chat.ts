import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Message = {
  arrival_time: number;
  content: string;
  sent_by: number;
}

type Participant = {
  id: number;
  username: string;
}

export type Chat = {
  id: string;
  participants: Participant[];
  messages: Message[];
}

type ChatState = {
  chats: Chat[];
  currentChat: Chat | null;
}

const initialState: ChatState = {
  chats: [],
  currentChat: null
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    startNewChat(state, action: PayloadAction<Chat>) {
      state.chats.push(action.payload);
      state.currentChat = action.payload;
    },
    sendMessage(state, action: PayloadAction<{ chatId: string, message: Message }>) {
      const chat = state.chats.find(chat => chat.id === action.payload.chatId);
      chat?.messages.push(action.payload.message);
      state.currentChat?.messages.push(action.payload.message);
    },
    startChat(state, action: PayloadAction<string>) {
      state.currentChat = state.chats.find(chat => chat.id === action.payload) ?? null;
    }
  },
})

export const chatActions = chatSlice.actions

export default chatSlice.reducer