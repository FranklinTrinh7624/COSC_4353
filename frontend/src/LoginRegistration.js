import React, { useState } from "react";
import "./LoginRegistration.css";

function LoginRegistration() {
  const [userRegister, setUserRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  function handleRegister(e) { /*to be modified?*/
      e.preventDefault();
      console.log('You Registered! ' + userRegister + ' ' + passwordRegister);
  }
  return (
    <div>
      <h1>Login/Registration</h1>
      <div className="LoginRegiApp">
        <form className="login">
          <label>Login</label>
          <div className="logUsername">
            <input type="text" placeholder="Username here" />
          </div>

          <div className="logPassword">
            <input type="password" placeholder="Password here" />
          </div>
          <button> Login </button>
        </form>

        <form className="register" onSubmit={handleRegister}>
          <label> Registration </label>
          <div className="regiUser">
            <input type="text" id="user" placeholder="Create Username" 
            onChange={(e)=> {setUserRegister(e.target.value)}} required/>
          </div>

          <div className="regiPass">
            <input type="password" id="pw" placeholder="Create Password" 
            onChange={(e)=> {setPasswordRegister(e.target.value)}} required/>
          </div>
          <button className="submit" type="submit"> Register </button>
        </form>
      </div>
    </div>
  );
}

export default LoginRegistration;