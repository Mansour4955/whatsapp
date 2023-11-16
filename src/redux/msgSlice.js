import { createSlice } from "@reduxjs/toolkit";
const initialState = { user: null };

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
});
export const { setUser } = messageSlice.actions;
export default messageSlice.reducer;
