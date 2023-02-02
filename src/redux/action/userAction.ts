import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAll, loginApi, registerApi } from "../../api/userApi";
import { IRegister, IUser } from "../../interfaces/interface";

export const userLogin = createAsyncThunk(
  "user/login",
  async (data: IUser, { rejectWithValue }) => {
    try {
      const res = await loginApi(data);
      localStorage.setItem("userToken", JSON.stringify(res));
    } catch (error) {
      console.log(error);
    }
  }
);
export const userRegister = createAsyncThunk(
  "user/register",
  async (data: IRegister, { rejectWithValue }) => {
    try {
      const res = await registerApi(data);
      localStorage.setItem("userToken", JSON.stringify(res));
    } catch (error) {
      console.log(error);
    }
  }
);

export const userGetAll = createAsyncThunk(
  "user/getUserAll",
  async (arg, { rejectWithValue }) => {
    try {
      const data = await getUserAll();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);
