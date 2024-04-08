import { useState } from "react";
import HelloWorld from "./Test";

function App() {
  const username = "Full Stack Web Developer";
  //How to use varialbe in react

  return (
    <>
      <HelloWorld />
      <div>Hello {username}</div>
      {/*  This is evaluates expression and it's final output not JS */}
    </>
  );
}

export default App;
