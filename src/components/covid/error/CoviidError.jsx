import React from 'react'
import './coviidError.css'
function CoviidError({fetchedData}) {
    
    return (
        <div>
            <h2>{fetchedData.covid19.err}</h2>
            <button   class="btn btn-primary">Reload</button>
        </div>
    )
}

export default CoviidError
