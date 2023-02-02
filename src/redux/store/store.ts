import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducer/userSlice";
import positionReducer from "../reducer/positionSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    position: positionReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
