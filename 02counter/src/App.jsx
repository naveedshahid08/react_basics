import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>Full Stack Web Developer</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  );
}

export default App;
