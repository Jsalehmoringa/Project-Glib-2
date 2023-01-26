import React from "react";

function Registerpage() {
    return (
        <div>
            <h1>Please fill in the form below</h1>
            <form>
                <input type="text" required="required" placeholder="Please input your name"></input>
                <input required="required" placeholder="Please input your e-mail"></input>
                <input required="required" placeholder="Please input a password"></input>
                <input type="submit" value="submit Details"></input>
            </form>
        </div>
    )
}

export default Registerpage;

