import React from 'react'
import './RecipeTable.css'

export default function RecipeTable(props) {
  return (
    <div>
        <table className='table mt-5'>
            <thead>
                <tr>
                <th>Recipes</th>
                </tr>
            </thead>
            <tbody id="table-body">
                {
                    props.recipes.map((recipe) => {
                        return (
                            <tr key = {recipe.recipeName}>
                                <td>
                                    <div className='card p-4'>
                                        <img className="displaySize" src={recipe.picture} alt="RecipePic" ></img>
                                        
                                        <div className="card-body">
                                        <h5 className="card-title">{recipe.recipeName}</h5>
                                        <p className="card-text">
                                            <div>
                                                {recipe.ingredients}
                                                {recipe.directions}
                                            </div>
                                            <div>
                                                {recipe.directions}
                                            </div>

                                        </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                }

            </tbody>

        </table>
    </div>
  )
}
