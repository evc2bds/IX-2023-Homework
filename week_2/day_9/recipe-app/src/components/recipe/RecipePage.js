import React from "react";
import { useState, useEffect } from "react";


import { Recipe } from "../../models/Recipe";
import RecipeInput from "./RecipeInput";
import RecipeGrid from "./RecipeGrid";

import RecipeService from "../../services/recipe-service";

export default function RecipePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!recipes.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const recipes = await RecipeService.fetchRecipes();
      setRecipes(recipes);
    } catch (err) {
      console.log(err);
    }
  }

  async function onRecipeCreated(
    name,
    description,
    ingredients,
    directions,
    picture
  ) {
    //create the Recipe
    const recipe = await RecipeService.createRecipe(
      new Recipe(null, name, description, ingredients, directions, picture)
    );

    //add the recipe to the recipes state
    setRecipes([...recipes, recipe]);
  }

  async function onRecipeDelete(recipeId) {
    await RecipeService.deleteRecipe(recipeId);

    //update the recipes state with the filtered recipes
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Recipes List</h1>

        <hr></hr>

        <p>Our firebase Recipes List</p>

        <hr></hr>

        <RecipeInput onRecipeCreated={onRecipeCreated}></RecipeInput>
        <RecipeGrid
          recipes={recipes}
          onRecipeDelete={onRecipeDelete}
        ></RecipeGrid>
      </div>
    </div>
  );
}
