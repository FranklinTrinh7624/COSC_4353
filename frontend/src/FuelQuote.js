import "./FuelQuote.css";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function App() {
  const [date, setDate] = useState(new Date());

  function submit(e){
    e.preventDefault();
    axios.post('/data/fuelquote',{
      date})
    //}).then((response)=>{console.log(response)})
    }

  return (
    <div className="App">
      <h1>Fuel Quote Form</h1>

      <Text>Gallons Requested:</Text>
      <input
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        placeholder="e.g 18"
      />
      <Text>
        {"\n"}
        {"\n"}
        {"\n"}
        Delivery Address: 15314 Riverside Dr.
        {"\n"}
        {"\n"}
        {"\n"}
      </Text>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
      <Text>
        {"\n"}
        {"\n"}
        {"\n"}
        Suggested Price: $29
      </Text>
      <Text>
        {"\n"}
        {"\n"}
        {"\n"}
        Total amount due: $30
        {"\n"}
        {"\n"}
        {"\n"}
      </Text>

      <button type="submit" id="save" onClick={submit}>
            Save
          </button>
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
