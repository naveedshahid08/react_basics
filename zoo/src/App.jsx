import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Root from "../src/Root.jsx";
import { useState } from "react";
import { animals, birds, insects, fishes } from "./animalsList.js";
import CategoryPage from "./routes/CategoryPage.jsx";
import SinglePage from "./routes/SinglePage.jsx";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });

  //Method to increase or decrease likes on the card
  const likesHandler = (name, category, action) => {
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].map((el) =>
        el.name === name
          ? { ...el, likes: el.likes + (action === "add" ? 1 : -1) }
          : el
      ),
    }));
  };

  // This method is for removing the card.
  const removeHandler = (name, category, action) => {
    setZoo((prevZoo) => ({
      // we are using the setZoo that we used in the states
      ...prevZoo,
      [category]: prevZoo[category].filter((el) => el.name !== name), // Category will be replaced with the new filer
    }));
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ":category",
          element: (
            <CategoryPage
              addLikes={likesHandler}
              removeLikes={likesHandler}
              removeCard={removeHandler}
              {...zoo}
            />
          ),
        },
        { path: ":category/:name", element: <SinglePage {...zoo} /> },
        { path: ":/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
