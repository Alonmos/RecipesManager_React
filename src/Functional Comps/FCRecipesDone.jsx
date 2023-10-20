import React from 'react'
import FCRecipe from '../Functional Comps/FCRecipe'

export default function FCRecipesDone(props) {

  // Remove recipe from eat list
  const getIDbacktoRecipes = (
    recipeid,
    recipename,
    recipecookingTime,
    recipecookingMethod,
    recipeimg) => {
    props.getIDtoRecipeslist(
      recipeid,
      recipename,
      recipecookingTime,
      recipecookingMethod,
      recipeimg
    )
  }

  // Create the ready to eat recipes str
  let strRecipesReady = 'Recipes Ready To Eat: ' + props.recipesDoneCounter
  let strEatList = props.eatlist.map((eat, ind) => {
    return <FCRecipe
      id={eat.id}
      name={eat.name}
      cookingTime={eat.cookingTime}
      cookingMethod={eat.cookingMethod}
      img_url={eat.img_url}
      key={ind}
      recipestatus='recipedone'
      buttontext='Eat!'
      dishBackToRecipes={getIDbacktoRecipes}
    />
  })

  return (
    <div>
      <div className='row' id='RecipesReadyDiv'>
        {strRecipesReady}
      </div>
      <div className='row'>
        {strEatList}
      </div>
    </div>
  )
}
