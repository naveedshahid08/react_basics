import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import './index.css'
/* const Box = () => {
  return (
    <div>
      <p>Name:</p>
      <p>Title:</p>
      <p>Age:</p>
    </div>
  )
} */
const Box = (props) => {
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>Title:{props.title}</p>
      <p>Age:{props.age}</p>
    </div>
  )
}
// This is pure JavaScript.
const name = 'Naveed Shahid';
const firstPage = 2024;

// This is Compoenent
const Demo = () => {
  return (
    <div>
    Hello, My name is {name}
      <p>I have {2024 - firstPage} years of building website experience</p>
      <Box name="Naveed" title="Developer" age="28"/>
      <Box name="Shahid" title="Full Stack Developer" age="32"/>
      <Box name="Karim" title="QA" age="25"/>
      <Box/>
      <Box/>
  </div>)
}
  

// It takes care where the application is goign to build
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 /*  <React.StrictMode>
    {Demo}
  </React.StrictMode>, */
  <React.StrictMode><Demo/></React.StrictMode>
)
