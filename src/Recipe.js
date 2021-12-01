import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, image, ingredients, url}) => {
    return(
    <div className={style.recipe}>
        <h1>{title}</h1>
        <p>You will need:</p>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>Want to make it tonight? Then visit:</p> 
        <p><a href={url} target="_blank" rel="noreferrer">{url}</a></p>
        <img className={style.image}src={image} alt=""/>
    </div>
    );
}

export default Recipe;