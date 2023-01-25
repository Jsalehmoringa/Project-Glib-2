import React from "react";

function Dashboard({ props }){
    return(
        <div className="cards">
            <h1>Results</h1>
            {props.map((prop)=>
                <div className="card" key={prop.id}>
                    <img ckassName="card-image" src={props.volumeinfo.imageLinks.smallThumbnail} alt="..."/>
                    <h2>{prop.volumeinfo.title}</h2>
                    <h3>{prop.volumeinfo.authors}</h3>
                    <h3>{prop.volumeinfo.publisher}</h3>
                    <h3>{prop.volumeinfo.publishedDate}</h3>

                </div>
            )}

        </div>

    )
}

export default Dashboard;