import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
    DeleteUser(state, action) {},
  },
});
console.log(userSlice);

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
