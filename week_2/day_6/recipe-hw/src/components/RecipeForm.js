import React, { useState } from 'react'
import {Recipe} from '../models/recipe';

export default function RecipeForm(props) {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [picture, setPicture] = useState(null);


    function onRecipeFormSubmit(e) {
        e.preventDefault();
        let recipe = new Recipe(recipeName, ingredients, directions, picture);
        // console.log(recipe);

        props.onRecipeCreated(recipe);
    }

  return (
    <div className='text-center'>
        <h1>Add a New Recipe</h1>
        <form id="form" onSubmit={onRecipeFormSubmit}>
            <div className='mb-3'>
                <label className='form-label'>Name of Recipe</label>
                <input id="recipeName-input" type="text" className="form-control"
                value={recipeName}
                onChange={(e)=> setRecipeName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Ingredients</label>
                <input id="ingredients-input" type="text" className="form-control"
                value={ingredients}
                onChange={(e)=> setIngredients(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Directions</label>
                <input id="directions-input" type="text" className="form-control"
                value={directions}
                onChange={(e)=> setDirections(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>URL for Picture of Recipe</label>
                <input id="picture-input" type="text"  className="form-control"
                value={picture}
                onChange={(e)=> setPicture(e.target.value)}
                />
            </div>

            <div className="d-grid mt-4">
                <button className='btn btn-outline-primary' type='submit'>
                    Add Recipe
                </button>
            </div>

        </form>
        <div>
            {/* <img src={picture}></img> */}
            {/* {picture} */}
        </div>
    </div>
  )
}
