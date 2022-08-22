import { configureStore } from '@reduxjs/toolkit'
import counterReducer from  './reducers/coviid'
export default configureStore({
  reducer: {
    covid19: counterReducer,
  } })