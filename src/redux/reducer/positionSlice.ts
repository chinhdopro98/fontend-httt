import { createSlice } from "@reduxjs/toolkit";
import { Position } from "../../interfaces/interface";
import { positionGetAll } from "../action/positionAction";
interface PositionState {
  positions: Position[];
}
const initialState: PositionState = {
  positions: [],
};

const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(positionGetAll.fulfilled, (state, action) => {
      state.positions = action.payload;
    });
  },
});
export const {} = positionSlice.actions;
export default positionSlice.reducer;
