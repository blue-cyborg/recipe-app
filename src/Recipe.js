import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>You will need:</p>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>Want to make it tonight?</p>
      <p>
        <a href={url} target="_blank" rel="noreferrer">
          Click Here
        </a>
      </p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
