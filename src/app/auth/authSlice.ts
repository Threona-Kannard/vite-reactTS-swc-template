import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  userID: string | null;
  userRole: string | null;
}

const initialState: IAuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  userID: localStorage.getItem("user_id"),
  userRole: localStorage.getItem("user_role"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess: (state, action: PayloadAction<any>) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user_id", action.payload.data._id);
      localStorage.setItem("user_role", action.payload.data.role);
      state.isAuthenticated = true;
    },
    authFail: (state, action: PayloadAction<any>) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("user_role");
      state.token = null;
      state.userID = null;
    },
    getUserSuccess: (state) => {
      console.log("dispatch success");
    },
    loggedOut: (state) => {
      localStorage.clear();
    }
  },
});

export const { authSuccess, authFail, getUserSuccess, loggedOut } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
