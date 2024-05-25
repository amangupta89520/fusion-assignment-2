import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type User = {
  id: number;
  username: string;
  chats: string[];
}

type UserState = {
  users: User[];
}

const initialState: UserState = {
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addNewUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
  },
})

export const userActions = userSlice.actions

export default userSlice.reducer