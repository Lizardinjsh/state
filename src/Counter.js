import React, { useState } from "react";



function Counter(props) {

  const [count, setCount] = useState(0);
  
  const [ratioChange, setRatioChange] = useState(1);

  function handleRatioChange(event) {
    setRatioChange(event.target.value);
  }

  function adder(event) {
    setCount(parseInt(count) + parseInt(ratioChange));
  }

  function minuser(event) {
    setCount(count - ratioChange);
  }

  

  return (
    <div className="App">
      <input
        type="number"
        value={ratioChange}
        onChange={handleRatioChange}
      ></input>
      <button onClick={adder}>GANG +{ratioChange} ratio</button>
      <button onClick={minuser}>GANG -{ratioChange} ratio</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;