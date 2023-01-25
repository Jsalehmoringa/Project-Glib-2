import React from 'react';
import Search from './Search';
import Dashboard from './Dashboard';


function App() {
  const [query,setQuery]=useState("")
  const [results,setResults]=useState("")


  function submitQuery(query){
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
          method:'GET',
           Headers:{
              client_id:"938367808517-ca8fq2rst51jtla7dg2jge1nfviohpt9.apps.googleusercontent.com",
              Accept:'application.jsom',
              'Content-Type':'application/json',

           }
      })

          .then((resp)=> resp.json())
          .then((data) =>
           console.log(data)
          )
  }


    return(
      <div>
        <h1>My App</h1>
        <Search props={query}/>
        <Dashboard props={results}/>
      </div>
    )

  }





export default App;
