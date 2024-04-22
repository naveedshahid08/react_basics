import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  /* let counter = 5; */
  const addValue = () => {
    /* counter = counter + 1; */

    setCounter(counter + 1);
  };

  const decreaseValue = () => {
    /* counter = counter - 1; */
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello, Nav; You are going to be Full Stack Developer</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Increase Value:{counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value:{counter}</button>
    </>
  );
}

export default App;
