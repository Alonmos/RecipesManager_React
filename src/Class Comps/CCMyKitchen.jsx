import React, { Component } from 'react'
import FCRecipes from '../Functional Comps/FCRecipes'
import FCRecipesDone from '../Functional Comps/FCRecipesDone';

// Initial recipes state
const initRecipesList = [
    {
        id: 1,
        name: 'Pizza',
        cookingTime: 15,
        cookingMethod: 'Bake',
        img_url: ''
    },
    {
        id: 2,
        name: 'Pasta',
        cookingTime: 20,
        cookingMethod: 'Cook',
        img_url: ''
    },
    {
        id: 3,
        name: 'Broccoli',
        cookingTime: 17,
        cookingMethod: 'Wash & Cut',
        img_url: ''
    }
]

export default class CCMyKitchen extends Component {
    constructor(props) {

        super(props)

        this.state = {
            recipesList: initRecipesList,
            eatList: [],
            recipesDoneCounter: 0
        }
    }

    // Add recipe to eat list
    makeRecipeToEat =
        (
            recipeid,
            recipename,
            recipecookingTime,
            recipecookingMethod,
            recipeimg
        ) => {
            let tempreadyrecipes = [
                ...this.state.eatList,
                {
                    id: recipeid,
                    name: recipename,
                    cookingTime: recipecookingTime,
                    cookingMethod: recipecookingMethod,
                    img_url: recipeimg
                }]
            this.setState({
                recipesList: this.state.recipesList.filter(recipe =>
                    recipe.id != recipeid),
                eatList: tempreadyrecipes,
                recipesDoneCounter: this.state.recipesDoneCounter + 1
            })
        }

    // Remove recipe from eat list
    BackRecipeToRecipesList =
        (
            recipeid,
            recipename,
            recipecookingTime,
            recipecookingMethod,
            recipeimg
        ) => {
            let tempreadyrecipes = [
                ...this.state.recipesList,
                {
                    id: recipeid,
                    name: recipename,
                    cookingTime: recipecookingTime,
                    cookingMethod: recipecookingMethod,
                    img_url: recipeimg
                }
            ]
            this.setState({
                eatList: this.state.eatList.filter(recipe =>
                    recipe.id != recipeid),
                recipesDoneCounter: this.state.recipesDoneCounter - 1,
                recipesList: tempreadyrecipes
            })
        }

    render() {
        return (
            <div className='container'>
                <FCRecipes
                    recipesList={this.state.recipesList}
                    getRecipeToEat={this.makeRecipeToEat} />
                <hr/>
                <FCRecipesDone
                    eatlist={this.state.eatList}
                    getIDtoRecipeslist={this.BackRecipeToRecipesList}
                    recipesDoneCounter={this.state.recipesDoneCounter} />
            </div>
        )
    }
}
