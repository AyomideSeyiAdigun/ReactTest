import axios from "axios"
import { fetchingData,fetchCovid19DataRequestSuccess, fetchCovid19DataRequestFailure} from '../reducers/coviid'

 
export const FetchCovid19Data = ()=>{
    return(dispatch) =>{
        dispatch( fetchingData)
        axios.get('https://covidnigeria.herokuapp.com/api')
        .then(res =>{
            const data = res.data
            dispatch(fetchCovid19DataRequestSuccess(data))
        })
        .catch(err=>{
            const errMsg = err.message
            dispatch(fetchCovid19DataRequestFailure(errMsg))
        })
    }
}


  