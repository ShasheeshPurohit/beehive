import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postSlice';
import authReducer from '../features/Auth/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData: authReducer,
    postsData: postsReducer,
  },
});
