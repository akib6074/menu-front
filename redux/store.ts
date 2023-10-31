import { configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import loginReducer from './features/login-slice';

export const store = configureStore({
  reducer: {
    loginReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useLoginSelector: TypedUseSelectorHook<RootState> = useSelector;
