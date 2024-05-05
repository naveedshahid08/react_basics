import "./App.css";
/* import Box from "../components/Box.jsx";
import { useState } from "react"; */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Counter from "../components/Counter.jsx";
import Form from "../components/Form.jsx";
import View from "../components/View.jsx";
import Dashboard from "../pages/Dashboard.jsx"; */
import Root from "../src/Root.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  /* const displayHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  }; */

  return <RouterProvider router={router} />;
}

export default App;
