import React from "react";
//import Loginpage from "./Loginpage";
//import { Route, Switch } from react-router-dom

function Homepage() {
    // const [token, setToken] =useState()

    // if(!token) {
    //     return (
    //         <Switch>
    //             <Route exact path="./login"><Loginpage setToken={setToken}/></Route>
    //         </Switch>
    //     )
    // }
    return (
        <div className="home">
            <h1>G-Lib</h1>
            <p>G-lib is a web application that acts as a library for books that the user can use. It enables the user to 
                browse through a majority of books while adding them to a users collection.
            </p>
        </div>
    )
}

export default Homepage;