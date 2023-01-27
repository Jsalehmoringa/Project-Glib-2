import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard({ props, createLib, searchQuery }) {

    function handleAdd(propid) {
        createLib(propid)
    }

    const [query, setQuery] = useState("")

    function handlesrch(e) {
        e.preventDefault()
        searchQuery(query)
    }

    return (
        <div>
        <div className="home-nav">
            <nav> 
                <Link className="navlink" to="./logout">Log Out</Link>
                <Link className="navlink" to="./mylibrary">My Library</Link>
                <form onSubmit={handlesrch}>
                    <input className="txt" type="text" value={query} placeholder="search book by author, name or year of publication." onChange={(e) => setQuery(e.target.value)}></input>
                    <input className="srch" type="submit" value="search"></input>
                </form>           
            </nav>
        </div>
        <div className="cards">
        {props.map((prop) => 
        <div className="card" key={"item_"+prop.id}>
            <img className="card-image" src={prop.volumeInfo.imageLinks.smallThumbnail} alt="..."></img>
            <div className="container">
                <h2 className="card-title"><b>Title: {prop.volumeInfo.title}</b></h2>
                <h3 className="card-subtitle">Authors: {prop.volumeInfo.authors}</h3>
                <p>Publisher:{prop.volumeInfo.publisher}</p>                  
                <p>PublishedDate:{prop.volumeInfo.publishedDate}</p>
                <button onClick={() => handleAdd(prop)}>Add Book to Bookshelf</button>
            </div>
        </div>
    )}
        </div>
        </div>     
    )
}

export default Dashboard;