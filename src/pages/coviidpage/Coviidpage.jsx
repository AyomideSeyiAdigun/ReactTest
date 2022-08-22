import React,{useEffect} from 'react'
import './coviidpage.css'
import { connect } from 'react-redux'
 import {FetchCovid19Data} from '../../stateManagement/actions'
import DataTable from '../../components/covid/dataTable/DataTable'
import CoviidError from '../../components/covid/error/CoviidError'
function Coviidpage({ fetchedData, fetchData}) {
  useEffect(()=>{
    fetchData()
  },[ ])
  return  fetchedData.covid19.isFetching ? (<h2>Loading</h2>) : fetchedData.covid19.err ? (<CoviidError fetchedData={fetchedData}/>) :(
    <DataTable fetchedData={fetchedData} />
  )
}

const mapStateToProps = state =>{
  return{
    fetchedData: state
  }
}

const mapDispatchToProps = dispatch=>{
  return{

  fetchData: ()=>  dispatch(FetchCovid19Data())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Coviidpage)
