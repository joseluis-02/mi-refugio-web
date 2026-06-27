import { configureStore } from '@reduxjs/toolkit';
import { bibleSlice } from '../features/bible/bibleSlice';
import { bibleApi } from '../services';

export const store = configureStore({
  reducer: {
    bible: bibleSlice.reducer,
    [bibleApi.reducerPath]: bibleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bibleApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;