import { configureStore } from "@reduxjs/toolkit";
import {SourceReducer} from "./reducers";

export const store = configureStore({
  reducer:{ 
    sources: SourceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch