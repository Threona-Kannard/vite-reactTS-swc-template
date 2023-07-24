import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

//#region Reducers 
import authReducer from './auth/authSlice';
//#endregion

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;