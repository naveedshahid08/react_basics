import { useState } from "react";
import Nameitasyouwant from "./components/Footer";
import Header from "./components/Header";
import { animals } from "./assets/animalsList.js"; // we can not change {animals} as it is coming from the file
import Card from "./components/Card.jsx";
import "./App.css";

function App() {
  const [animalsData, setAnimalsData] = useState(animals); // We can change the {animals} to any name as we did animalData
  let [likes, setCounterLikes] = useState(0);

  const removeCard = (animal) => {
    const updatedArray = animalsData.filter((item) => item.name !== animal);
    setAnimalsData(updatedArray);
  };

  /* const addLikes = () => {
    setCounterLikes(likes + 1);
    console.log(likes);
  };

  const removeLikes = () => {
    setCounterLikes(likes - 1);
  }; */
  const likesHandler = (animal, action) => {
    const updatedArray = animalsData.map((item) => {
      if (item.name === animal) {
        if (action === "add") {
          return { ...item, likes: item.likes + 1 }; // We can not do directely so we need to open
        } else {
          return { ...item, likes: item.likes - 1 };
        }
      } else {
        return item; // Just return item as it is without touching it
      }
    });
    setAnimalsData(updatedArray);
    console.log(animal, action);
  };
  return (
    <>
      <Header />
      <main>
        {animalsData.map((animal) => (
          <Card
            key={animal.name}
            {...animal}
            removeLikes={() => likesHandler(animal.name, "remove")} // Binding the data with even handler
            /* addLikes={() => addLikes(animal.name)} // Here we are using Anonymous Function as we haven't used const addLikes = () => {} */

            removeCard={removeCard.bind(this, animal.name)} // This is another method same as the above one.
            addLikes={() => likesHandler(animal.name, "add")}

            /* likes={likes} */
          /> // The first removeLikes is prop and {removeLikes} is function
        ))}
        <p>{likes}</p>
      </main>

      <Nameitasyouwant />
    </>
  );
}

export default App;
