import { createSlice } from "@reduxjs/toolkit";
import { UserStore } from "../../interfaces/interface";
import { userGetAll, userLogin, userRegister } from "../action/userAction";
interface UserState {
  loading: boolean;
  error: string;
  user: UserStore[];
  success: boolean;
}

const initialState: UserState = {
  loading: false,
  error: "",
  user: [],
  success: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.success = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.success = false;
    });

    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.success = true;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.success = false;
    });

    builder.addCase(userGetAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userGetAll.fulfilled, (state, action) => {
      state.success = true;
      state.user = action.payload;
    });
    builder.addCase(userGetAll.rejected, (state, action) => {
      state.success = false;
    });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
