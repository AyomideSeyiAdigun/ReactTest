import React from 'react'
import './dataTable.css'
function DataTable({fetchedData}) {
    return (
        <div className="table-responsive">
          <table className="table" id="tab" border="2px solid black">
              <caption>Covid-19 Data</caption>
              <thead>
                <tr scope="row">
                  <th scope="col">Total Samples Tested</th>
                  <th scope="col">Total Confirmed Cases</th>
                  <th scope="col">Total Active Cases</th>
                  <th scope="col">Discharged</th>
                  <th scope="col">Death</th>
                </tr>
              </thead>
              <tbody>
                <tr scope="row">
                  <td scope="col">{fetchedData.covid19.covid19Data.data?.totalSamplesTested}</td>
                  <td scope="col">{fetchedData.covid19.covid19Data.data?.totalConfirmedCases}</td>
                  <td scope="col">{fetchedData.covid19.covid19Data.data?.totalActiveCases}</td>
                  <td scope="col">{fetchedData.covid19.covid19Data.data?.discharged}</td>
                  <td scope="col">{fetchedData.covid19.covid19Data.data?.death}</td>
                </tr>
              </tbody>
            </table>
          
            <table className="table" id="tab" border="2px solid black">
              <thead>
                <tr scope="row">
                  <th scope="col">State</th>
                  <th scope="col">Confirmed cases</th>
                  <th scope="col">Case on admission</th>
                  <th scope="col">Discharged</th>
                  <th scope="col">Death</th>
                </tr>
              </thead>
              <tbody>
            {
            fetchedData && fetchedData.covid19 && fetchedData.covid19.covid19Data.data?.states.map((state,i)=>
               
                <tr scope="row" key={i}>
                  <td scope="col">{state.state}</td>
                  <td scope="col">{state.confirmedCases}</td>
                  <td scope="col">{state.casesOnAdmission}</td>
                  <td scope="col">{state.discharged}</td>
                  <td scope="col">{state.death}</td>
                </tr>
                )
            
                  }
              </tbody>
            </table>
            
       
      </div>
    )
}

export default DataTable
