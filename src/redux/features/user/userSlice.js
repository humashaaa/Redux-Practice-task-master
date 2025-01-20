import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "humashaa",
  userTasks: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
