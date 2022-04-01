import React, { useState } from "react";
import "./LoginRegistration.css";
import axios from "axios";

function LoginRegistration() {
  const [userRegister, setUserRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [logUser, setLogUser] = useState("");
  const [logPassword, setLogPassword] = useState("");

  function submitRegistration(e){
    e.preventDefault();
    axios.post('/data/registration',{
      userRegister, passwordRegister,})
      .then((response)=>{
        console.log(response);
      });

    }

  function submitLogin(e){
    e.preventDefault();
    axios.post('/data/login',{
      logUser, logPassword})
      .then((response)=>{
        console.log(response);
      });
    }
  return (
    <div>
      <h1>Login/Registration</h1>
      <div className="LoginRegiApp">
        <form className="login">
          <label>Login</label>
          <div className="logUsername">
            <input type="text" placeholder="Username here" onChange={(e)=>{setLogUser(e.target.value)}}/>
          </div>

          <div className="logPassword">
            <input type="password" placeholder="Password here" onChange={(e)=>{setLogPassword(e.target.value)}}/>
          </div>
          <button className="submit" type="submit" onClick={submitLogin}> Login </button>
        </form>

        <form className="register">
          <label> Registration </label>
          <div className="regiUser">
            <input type="text" id="user" name="userReg"placeholder="Create Username" 
            onChange={(e)=> {setUserRegister(e.target.value)}} required/>
          </div>

          <div className="regiPass">
            <input type="password" id="pw" name="passReg"placeholder="Create Password" 
            onChange={(e)=> {setPasswordRegister(e.target.value)}} required/>
          </div>
          <button className="submit" type="submit" onClick={submitRegistration}> Register </button>
        </form>
      </div>
    </div>
  );
}

export default LoginRegistration;