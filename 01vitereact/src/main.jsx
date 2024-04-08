import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Hello I am under the water</h1>
    </div>
  );
}
const reactElement = {
  type: "a",
  props: {
    href: "https//google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const CreateReactElement = (
  <a href="https://www.google.com/" target="_blank">
    Visit Google
  </a>
);

const customReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to visit Google",
  username
);

ReactDOM.createRoot(document.getElementById("root")).render(customReactElement);
