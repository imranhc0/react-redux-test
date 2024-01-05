"use client"

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import companyReducer from './companySlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  company: companyReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store);