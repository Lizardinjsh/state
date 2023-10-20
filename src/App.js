import React, { useState } from "react";
import Counter from "./Counter.js";
import Hello from "./Hello.js";

function App() {
  const allNames = [
    "Jekabs",
    "Logins",
    "Adrians"
  ]

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
