import React from 'react'

export default function FCRecipe(props) {

     // Add or Remove recipe from eat list
     const handleRecipe = () => {
          if (props.recipestatus === 'recipe')
               props.prepareDishToEat
                    (
                         props.id,
                         props.name,
                         props.cookingTime,
                         props.cookingMethod,
                         props.img_url
                    )
          else
               props.dishBackToRecipes(
                    props.id, props.name,
                    props.cookingTime,
                    props.cookingMethod,
                    props.img_url
               )
     }

     return (
          <div className='col-md-6 col-lg-4'>
               <div className='recipeDiv'>
                    <div>
                         <h3>{props.name}</h3>
                         <p>Cooking Time: {props.cookingTime} Minutes</p>
                         <p> Cooking Method: {props.cookingMethod}</p>
                    </div>
                    <div>
                         <img src={props.img_url} alt="Dish Img"></img>
                         <br />
                    </div>
                    <div>
                         <button
                              className='recipeBtn'
                              onClick={handleRecipe}>
                              {props.buttontext}
                         </button>
                    </div>
               </div>
          </div>
     )
}

