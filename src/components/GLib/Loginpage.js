import React, { useEffect, useState }  from "react";
import jwtDecode from 'jwt-decode';

const google = window.google;
function Loginpage() {

    const [user, setUser] =useState({});

  function handleSignOut(e) {
    setUser({})
    document.getElementById("signinDiv").hidden= false;
  }

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " +response.credential)
    var userObj = jwtDecode(response.credential)
    console.log(userObj)
    setUser(userObj)
    document.getElementById("signinDiv").hidden= true;
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "1053999025061-fv82hf5vg46ahvc2uanc7egubi5abdk1.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signinDiv"),
      { size: "largest", width: 500, height: 300, theme: "dark" }
  )

      google.accounts.id.prompt()
  }, [])

    return (
        <div className="sign">
    <div id="signinDiv">  
      </div>
      {Object.keys(user).length !== 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out </button>
      }
      {user && 
        <div>
        <h1>Welcome :{user.name}</h1>
        </div>
      }
      </div>
    )
}

export default Loginpage;