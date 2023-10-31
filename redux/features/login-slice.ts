import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoginState {
  email: string;
  password: string;
  isAuthenticated: boolean;
}

const initialState: LoginState = {
  email: '',
  password: '',
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export default loginSlice.reducer;
export const { setEmail, setPassword, logIn, logOut } = loginSlice.actions;
