import { createSlice } from '@reduxjs/toolkit'
 
export const covid19Slice = createSlice({
  name: 'covid19',
  initialState: {
    covid19Data: {},
    isFetching:false,
    err:false
    
  },
  reducers: {
    FetchCovid19Data: (state,action) => {
      return state
    },
    fetchingData:(state)=>{
      state.covid19Data =  {}
      state.isFetching = true
      state.err=false
    },
    fetchCovid19DataRequestSuccess: (state,action) => {
      state.covid19Data = action.payload 
      state.isFetching = false
      state.err=false
    },
    fetchCovid19DataRequestFailure:(state, action) => {
      state.covid19Data = {}
      state.isFetching = false
      state.err=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchingData,fetchCovid19DataRequestSuccess, fetchCovid19DataRequestFailure} = covid19Slice.actions

export default covid19Slice.reducer