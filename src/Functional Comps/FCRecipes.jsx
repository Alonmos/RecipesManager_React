import React from 'react'
import FCRecipe from '../Functional Comps/FCRecipe'


export default function FCRecipes(props) {

    // Add recipe to eat list
    const getRecipeIDToEat = (
        recipeid,
        recipename,
        recipecookingTime,
        recipecookingMethod,
        recipeimg) => {
        props.getRecipeToEat(
            recipeid,
            recipename,
            recipecookingTime,
            recipecookingMethod,
            recipeimg)
    }

    // Create the recipes str
    let strRenderRecipesList = props.recipesList.map((recipe, indx) => {
        return <FCRecipe
            id={recipe.id}
            name={recipe.name}
            cookingTime={recipe.cookingTime}
            cookingMethod={recipe.cookingMethod}
            img_url={recipe.img_url}
            key={indx}
            recipestatus='recipe'
            buttontext='Prepare Dish!'
            // Send the getRecipeToEat function as props
            prepareDishToEat={getRecipeIDToEat}
        />
    })

    return (
        <div className='row'>
            {strRenderRecipesList}
        </div>
    )
}
