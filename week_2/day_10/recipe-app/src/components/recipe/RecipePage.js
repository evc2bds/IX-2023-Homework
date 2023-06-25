import React from "react";
import { useState, useEffect } from "react";


import { Recipe } from "../../models/Recipe";
import RecipeInput from "./RecipeInput";
import RecipeGrid from "./RecipeGrid";

import RecipeService from "../../services/recipe-service";

export default function RecipePage(props) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!recipes.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    setLoading(true);
    try {
      const recipes = await RecipeService.fetchRecipes();
      setRecipes(recipes.filter((recipe) => recipe.userId === props.user.uid)); //only see recipes made by user logged in
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
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
      new Recipe(null, name, description, ingredients, directions, picture, props.user.uid)
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
        <RecipeGrid
          recipes={recipes}
          loading={loading}
          onRecipeDelete={onRecipeDelete}
        ></RecipeGrid>

        <hr></hr>

        <RecipeInput onRecipeCreated={onRecipeCreated}></RecipeInput>
      </div>
    </div>
  );
}
