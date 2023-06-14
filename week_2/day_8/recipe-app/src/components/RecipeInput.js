import React, { useState, useEffect } from 'react'
import { Recipe } from '../models/Recipe';

export default function RecipeInput(props) {
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [picture, setPicture] = useState(null);

    function onRecipeFormSubmit(e) {
        e.preventDefault();

        props.onRecipeCreated(recipeName, description, ingredients, directions, picture);

        //clear input fields after submitted
        setRecipeName('');
        setDescription('');
        setIngredients('');
        setDirections('');
        setPicture('');
    }


  return <div>
    <h1>Add a New Recipe</h1>
        <form id="form" onSubmit={onRecipeFormSubmit}>
            <div className='mb-3'>
                <label className='form-label'>Name of Recipe</label>
                <input id="recipeName-input" type="text" className="form-control"
                value={recipeName}
                maxlength="38"
                onChange={(e)=> setRecipeName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description of Recipe</label>
                <input id="description-input" type="text" className="form-control"
                maxlength="50"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
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

  </div>
}
