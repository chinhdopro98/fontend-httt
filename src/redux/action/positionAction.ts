import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPositionAll } from "../../api/positionsApi";
export const positionGetAll = createAsyncThunk(
  "position/getPositionAll",
  async (arg, { rejectWithValue }) => {
    try {
      const data = await getPositionAll();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);
