import React from "react";



function Search({props}){

    function respsubmit(event){
        event.preventDefault()
        submitQuery(props)
    }

    return(
        <div>
            <h1>Form</h1>
        <form onSubmit={respsubmit}>
            <input type="text" value={props} onChange={(e) => setQuery(e.target.value)} />
            <input type ="submit" />
        </form>
        </div>
    )

}
export default Search;