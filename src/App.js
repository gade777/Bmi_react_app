import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="main_container">
      <h1>BMI Calculator</h1>
      <form onSubmit={calBmi}>
        <div className="input_container">
          <div>
            <label className="label">Weight (lbs)</label>
            <input
           
              type="text"
              value={weight}
              placeholder="Enter Weight..!"
              className="input"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Height (in)</label>
            <input
              type="text"
              value={height}
              placeholder="Enter number..!"
              className="input"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
        <div className="btn_container">
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
          <div>
            <button type="reload" className="btn_1" onClick={reload}>
              Reload
            </button>
          </div>
        </div>
        <div className="message">
          <h4>Your BMI is:{bmi}</h4>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
