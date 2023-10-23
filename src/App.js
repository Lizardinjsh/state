import React, { useState } from "react";
import Counter from "./Counter.js";
import Hello from "./Hello.js";

function App() {
  const allNames = [
    "Jekabs",
    "Logins",
    "Adrians"
  ];
  const ratio = [
    7,
    43,
    101
  ];

const helloJSX = allNames.map((name , index)=> {
  return <Hello key={index} name={name} />;
});

const helloJSX = ratio.map((value, index)=> {
  return <Hello key={index} value={value} />;
});
return (
  <>
  <Counter />
  <Hello />
  <br/>
  <br/>
  <br/>
  <Hello />
  </>
);
}

export default App;
