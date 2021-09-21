import React, { Component } from 'react'
import { ingredientsArr } from '../ingredient-data.js'
import LiComponent from './LiComponent.js'

export default class IngredientsSectionComponent extends Component {
    render() {
        return (
            <ul>
                {
                    ingredientsArr.map((ingredient) => {
                        return <LiComponent 
                        quantity = {ingredient.quantity}
                        ingredient = {ingredient.ingredient}
                        />
                    })
                }
            </ul>
        )
    }
}
