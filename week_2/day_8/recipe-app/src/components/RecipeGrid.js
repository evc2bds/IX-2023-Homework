import React from 'react';
import "./RecipeGrid.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function RecipeGrid(props) {
    return (
        <div className="wrapper">
          {props.recipes.map((recipe) => {
            return (
              <div className="card" key={recipe.id}>
                <img
                  className="card__img"
                  src={recipe.picture}
                  alt="RecipePic"
                ></img>
                <div className="card__body">
                  <h5 className="card__title">{recipe.recipeName}</h5>
                  <p className="card__description">{recipe.description}</p>
                  <button className="btn btn-light">View Recipe</button>
                  
                  <div className='action-buttons'>
                    {/* <button className="bi bi-pencil-square" onClick={()=> props.onRecipeEdit(recipe)}></button> */}
                    <button className="bi bi-trash" onClick={()=> props.onRecipeDelete(recipe.id)}></button>
                  </div>
    
                </div>
              </div>
            );
          })}
        </div>
      );
    }
