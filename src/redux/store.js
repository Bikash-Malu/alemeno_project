import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import courseReducer from './courseSlice';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, courseReducer);
export const store = configureStore({
  reducer: {
    courses: persistedReducer,
  },
});

export const persistor = persistStore(store);
