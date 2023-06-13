import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import RecipeForm from './components/RecipeForm';
import RecipeTable from './components/RecipeTable';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  function onRecipeCreated(recipe) {
    setRecipeToEdit(null);
    setRecipes([...recipes, recipe]);
    console.log(recipes)
  }

  function onRecipeDelete(recipe) {
    setRecipes(recipes.filter((x) => x.recipeName !== recipe.recipeName));
  }

  function onRecipeEdit(recipe) {
    setRecipeToEdit(recipe);
    setRecipes(recipes.filter((x) => x.recipeName !== recipe.recipeName));
  }

  return (
    <div className="text-center m-5">
      <RecipeForm recipeToEdit={recipeToEdit} onRecipeCreated={onRecipeCreated}></RecipeForm>
      <RecipeTable recipes={recipes} onRecipeDelete={onRecipeDelete} onRecipeEdit={onRecipeEdit}></RecipeTable>
    </div>
  );
}

export default App;
