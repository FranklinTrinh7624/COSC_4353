import React from "react";
import "./App.css";
import { Text } from "react-native";

import Navigation from "./Navigation";
import ClientProfile from "./ClientProfile";
import FuelQuote from "./FuelQuote";
import LoginRegistration from "./LoginRegistration";
import FuelQuoteHistory from "./FuelQuoteHistory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    /*<div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start to seefds nothingheresome magic happen!</h2>
    </div>*/

    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientprofile" element={<ClientProfile />} />
          <Route path="/fuelquote" element={<FuelQuote />} />
          <Route path="/loginregistration" element={<LoginRegistration />} />
          <Route path="/fuelquotehistory" element={<FuelQuoteHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Home Page </h1>
    <h4>Hello welcome to our website.</h4>
    <h4>
      Please login or register first and then select whatever option you need at
      the top of the page.
    </h4>
  </div>
);
