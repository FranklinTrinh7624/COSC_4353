import "./FuelQuote.css";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [gallonsRequeseted, setGallonsRequested] = useState("");
  //const [deliveryAddress, setDeliveryAddress] = useState("");
  const [getStuff, setGetStuff] = useState([]);

  function submit(e){
    e.preventDefault();
    axios.post('/data/fuelquote',{
      gallonsRequeseted, date})
    //}).then((response)=>{console.log(response)})
    }

  useMemo(()=>{
    axios.get('/data/FuelQuoteGet').then((response)=>{
      setGetStuff(response.data)
      console.log(response)
    })
  },[])

    return (
      <div className="fuelQuote">
        <div className="form-wrapper">
          <h1>Fuel Quote Form</h1>
  
          <div className="gallonsRequested">
            <label>Gallons Requseted: </label>
            <input
              type="number"
              id="gallons-requested"
              name="gallonsrequested"
              maxLength={100}
              required
              onChange={(e) => setGallonsRequested(e.target.value)}
            ></input>
          </div>

          <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          </Text>

          <div className="deliveryAddress">
          <label>Delivery Address: </label>
          {getStuff.map((getStuffSet)=>(
            <text>{getStuffSet.Address}</text>
          ))}
          </div>
          
          <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          </Text>

          <DatePicker selected={date} onChange={(date) => setDate(date)} />

          <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          </Text>

          <div className="gallonPrice">
          <label>Price Per Gallon: </label>
          {getStuff.map((getStuffSet)=>(
            <text>{getStuffSet.PricePerGallon}</text>
          ))}
          </div>

          <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          </Text>

          <div className="totalPrice">
          <label>Total Price: </label>
          {getStuff.map((getStuffSet)=>(
            <text>{getStuffSet.TotalPrice}</text>
          ))}
          </div>

          <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          </Text>
          
          <button type="submit" id="save" onClick={submit}>
            Save
          </button>
        </div>
      </div>
    );
}


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    margin: 10
  }
});
