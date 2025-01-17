import { configureStore  } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'
import { bibleSlice } from '../features/bible/bibleSlice';
import { bibleApi } from '../services';

// Crear el store y agregar redux-thunk al middleware
export const store = configureStore({
  reducer: {
    bible:bibleSlice.reducer,
    [bibleApi.reducerPath]: bibleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    thunk,
    bibleApi.middleware,
  ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;