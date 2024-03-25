import "./App.css";
import Box from "./Box.jsx";
import { useState } from "react";

function App() {
  /* const [counter, setCounter] = useState("Hello"); */
  const [counter, setCounter] = useState(0);

  const [persons, setPersons] = useState([
    { id: 1, name: "Naveed", title: "Student", location: "Helsinki" },
    { id: 2, name: "Smith", title: "Teacher", location: "Espoo" },
    { id: 3, name: "Jhon", title: "Master", location: "Vantaa" },
  ]);

  const clickHandler = () => {
    setCounter(counter + 1);
    /* console.log("Button Clicked"); */
  };
  const decreaseButton = () => {
    setCounter(counter - 1);
  };
  const defaultButton = () => {
    setCounter(0);
  };

  return (
    <>
      <p>Counter:{counter}</p>
      <button onClick={clickHandler}>Increase Button +</button>
      <button onClick={decreaseButton}>Decrease Button -</button>
      <button onClick={defaultButton}>Set 0 </button>

      {/* <Box name="Naveed" title="Student" location="Helsinki" />
   /* These are just place holders
      <Box name="Nav" title="Writer" location="Estonia"/>
      <Box name="Will" title="Driver" location="USA" /> */}
      {persons.map((person) => (
        <Box
          key={person.id}
          name={person.name} //We are using here the code from the array into the Box Component
          title={person.title}
          location={person.location}
        />
      ))}
    </>
  );
}

export default App;

{
  /* <p>{person.name}</p> // Here is how to display data from the array without Component.
            <p>{person.title}</p>
            <p>{person.location}</p> */
}
