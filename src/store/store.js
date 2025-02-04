import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/UserSlice';
import counterReducer from '../slice/CounterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});
