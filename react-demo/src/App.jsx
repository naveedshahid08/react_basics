import "./App.css";
import Box from "./Box.jsx";
import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Counter from "./Counter.jsx";
import Form from "./Form.jsx";
import View from "./View.jsx";
function App() {
  const [counter, setCounter] = useState(0); //This is the state of Counter

  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });

  /* const [persons, setPersons] = useState([
    { id: 1, name: "Naveed", title: "Student", location: "Helsinki" },
    { id: 2, name: "Smith", title: "Teacher", location: "Espoo" },
    { id: 3, name: "Jhon", title: "Master", location: "Vantaa" },
  ]); */

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const changeAllHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({ ...prevState, [name]: value })); //De-structuring ... is Spread Operation

    /* setFormData({ [event.target.name]: event.target.value }); */
    console.log(formData);
  };

  /*   const IncreaseButton = () => {
    // This is counter function

    setCounter(counter + 1);
  };
  const decreaseButton = () => {
    setCounter(counter - 1);
  };
  const defaultButton = () => {
    setCounter(0);
  }; */

  return (
    <>
      <Header />
      {/*  <input type="text" name="" id="" onChange={changeHandler} />
      <p>{inputValue}</p> */}

      <Form changeHandler={changeAllHandler} />
      <View
        /* fname={formData.fname}
        lname={formData.lname}
        phone={formData.phone}
        email={formData.email}
        message={formData.message} */
        {...formData}
      />

      {/*    <Counter
        counterP={counter} // The first counter is props. This is coming from the Counter.jsx
        IncreaseButton={IncreaseButton} // Exporting the Function here as Props
        decreaseButton={decreaseButton}
        defaultButton={defaultButton}
      /> */}

      {/* <Box name="Naveed" title="Student" location="Helsinki" />
   /* These are just place holders
      <Box name="Nav" title="Writer" location="Estonia"/>
      <Box name="Will" title="Driver" location="USA" /> */}
      {/* {persons.map((person) => (
        <Box
          key={person.id}
          name={person.name} //We are using here the code from the array into the Box Component
          title={person.title}
          location={person.location}
        />
      ))} */}
      <div>
        <h2>
          <Footer />
        </h2>
      </div>
    </>
  );
}

export default App;

{
  /* <p>{person.name}</p> // Here is how to display data from the array without Component.
            <p>{person.title}</p>
            <p>{person.location}</p> */
}
