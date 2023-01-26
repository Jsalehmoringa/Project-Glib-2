import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ searchQuery }) {
    const [query, setQuery] = useState("")

    function handlesrch(e) {
        e.preventDefault()
        searchQuery(query)
    }

    return (
        <div className="home-nav">
            <nav>
                <Link className="navlink" to="/">Home</Link>
                <Link className="navlink"  to="./login">Log In</Link>
                <Link className="navlink" to="./dashboard">Dashboard</Link> 
                <Link className="navlink" to="./logout">Log Out</Link>
                <Link className="navlink" to="./mylibrary">My Library</Link>
                <form onSubmit={handlesrch}>
                    <input className="txt" type="text" value={query} placeholder="search book by author, name or year of publication." onChange={(e) => setQuery(e.target.value)}></input>
                    <input className="srch" type="submit" value="search"></input>
                </form>           
            </nav>
        </div>
    )
}

export default Navbar;