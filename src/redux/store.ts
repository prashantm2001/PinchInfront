import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { questionapi } from './service/questionapi'

export const store = configureStore({
  reducer: combineReducers({
       [questionapi.reducerPath]: questionapi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(questionapi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch