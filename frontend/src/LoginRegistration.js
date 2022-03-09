import React, { useState } from "react";
import "./LoginRegistration.css";

function LoginRegistration() {
  const [userRegister, setUserRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
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

        <form className="register">
          <label> Registration </label>
          <div className="regiUser">
            <input type="text" id="user" placeholder="Create Username" />
          </div>

          <div className="regiPass">
            <input type="password" id="pw" placeholder="Create Password" />
          </div>
          <button className="btn"> Register </button>
        </form>
      </div>
    </div>
  );
}

export default LoginRegistration;