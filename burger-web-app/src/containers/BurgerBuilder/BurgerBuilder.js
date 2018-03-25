import React, {Component} from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    bacon: 0.7,
    meat: 0.8
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseState(ingredients){
       
        let sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum,el) =>{
            return sum+el;
        },0);

        this.setState({
            purchaseable: sum>0
        });
    }
    
    addIngredientHandler = (type) =>{
        const prevCount = this.state.ingredients[type];
        const updatedCount = prevCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type]= updatedCount;

        //Implementing Dynamic Cost on Addition of Ingredients
        const priceAddition = INGREDIENT_PRICES[type];
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        //calling purchaseHandler
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler =(type) =>{
        const prevCount = this.state.ingredients[type];

        if(prevCount <=0){
            return;
        }

        const updatedCount = prevCount -1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type]= updatedCount;

        //Implementing Dynamic Cost on Addition of Ingredients
        const priceSubstraction = INGREDIENT_PRICES[type];
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice - priceSubstraction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        //calling purchaseHandler
        this.updatePurchaseState(updatedIngredients);
    }

    


    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0
        }

        return (
           
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    disabled={disabledInfo}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    burgerPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                      />
            </Aux>
        );
    }
}

export default BurgerBuilder;