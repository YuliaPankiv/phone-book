import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  handleAuthFulfilled,
  handleLogOutFulfilled,
  handlePendingRefresh,
  handleRefreshFulfilled,
  handleRejectedRefresh,
} from '../../components/service/sliceFunctions/authFunctionsSlice';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleAuthFulfilled)
      .addCase(logIn.fulfilled, handleAuthFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRejectedRefresh);
  },
});

export const authReducer = authSlice.reducer;
