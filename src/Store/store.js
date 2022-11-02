import { configureStore } from '@reduxjs/toolkit';
import { imageSlice } from './imageSlice';

export const store = configureStore({
    reducer: {
      images: imageSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
      }),
  });