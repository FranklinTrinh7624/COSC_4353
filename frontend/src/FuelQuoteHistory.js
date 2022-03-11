import React, { useState, useMemo } from "react";
import "./FuelQuoteHistory.css";
//import data from "./QuoteHistory.json";
import axios from "axios";

function FuelQuoteHistory() {
  const [history, setHistory] = useState([]);
  
  useMemo(()=>{
    axios.get('/data/FuelQuoteHistory').then((response)=>{
      setHistory(response.data)
      console.log(response)
    })
  },[])
  
  return (
    <div className="FuelQuoteHisotry">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Gallons Requested</th>
            <th>Delivery Address</th>
            <th>Delivery Date</th>
            <th>Suggested Price</th>
            <th>Total Amount Due</th>
          </tr>
        </thead>
        <tbody>
          {history.map((historySet) => (
            <tr>
              <td>{historySet.Date}</td>
              <td>{historySet.GallonsRequested}</td>
              <td>{historySet.DeliveryAddress}</td>
              <td>{historySet.DeliveryDate}</td>
              <td>{historySet.SuggestedPrice}</td>
              <td>{historySet.TotalAmountDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FuelQuoteHistory;
