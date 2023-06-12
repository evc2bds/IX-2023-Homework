import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeForm from './components/RecipeForm';
import RecipeTable from './components/RecipeTable';

function App() {
  const [recipes, setRecipes] = useState([]);

  function onRecipeCreated(recipe) {
    setRecipes([...recipes, recipe]);
    console.log(recipes)
  }

  return (
    <div className="text-center m-5">
      <RecipeForm onRecipeCreated={onRecipeCreated}></RecipeForm>
      <RecipeTable recipes={recipes}></RecipeTable>
    </div>
  );
}

export default App;
