import React from "react";
import NasaData from "./components/NasaData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Here's some cool data displayed from outer space. 
      </p>
      <NasaData />
    </div>
  );
}

export default App;
