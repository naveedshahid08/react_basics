import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ name, likes, addLikes, removeLikes, removeCard }) => {
  return (
    <>
      <div className="card">
        <h2>{name}</h2>

        <div className="container">
          <img src={`https://source.unsplash.com/400x400/?${name}`} />
          <button onClick={removeLikes}>
            <span className="material-symbols-outlined"> heart_minus</span>
          </button>

          <p>{likes}</p>

          <button onClick={addLikes}>
            <span className="material-symbols-outlined">heart_plus</span>
          </button>

          <button onClick={removeCard}>
            <span className="material-symbols-outlined">cancel</span>
          </button>
        </div>
        <Link to={name}>Get Details</Link>
      </div>
    </>
  );
};

export default Card;
