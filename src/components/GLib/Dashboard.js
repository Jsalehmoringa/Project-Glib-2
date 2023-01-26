import React from "react";

function Dashboard({ props, createLib }) {

    function handleAdd(propid) {
        createLib(propid)
    }

    return (
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
    )
}

export default Dashboard;