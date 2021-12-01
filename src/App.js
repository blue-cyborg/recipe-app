import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = 'aa13ae9e';
  const APP_KEY = '06da79de7875a7e808b4a5013971b8a0';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
       <div className="title">
      <h1>Recipe Search</h1>
      <h2>Find ideas for dinner here!</h2>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="enter an ingredient or dish" value={search} onChange={updateSearch} />
        <button
        className="search-button" 
        type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}/>
      ))}
       </div>
    </div>
  );
}

export default App;
