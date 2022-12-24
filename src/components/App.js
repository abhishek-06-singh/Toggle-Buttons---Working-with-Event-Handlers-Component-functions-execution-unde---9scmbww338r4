import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  //code here
  const [text, setText] = useState(true);
  const handleClick = () => {
    setText(!text);
  };

  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {text ? "OFF" : "ON"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {!text ? "OFF" : "ON"}
      </button>
    </div>
  );
};

export default App;
