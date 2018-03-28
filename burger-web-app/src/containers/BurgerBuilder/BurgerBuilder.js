import React, {Component} from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

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
        purchaseable: false,
        confirmOrder: false
    }

    // updatePurchaseState(ingredients){
       
    //     let sum = Object.keys(ingredients).map(igKey => {
    //         return ingredients[igKey]
    //     }).reduce((sum,el) =>{
    //         return sum+el;
    //     },0);

    //     this.setState({
    //         purchaseable: sum>0
    //     });
    // }

    isPurchaseable(totalPrice){
        if(totalPrice <= 4){
            this.setState({
                purchaseable:false
            });
        }
        else{
            this.setState({
                purchaseable:true
            });
        }
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


        this.isPurchaseable(newPrice);
        //calling purchaseHandler
        // this.updatePurchaseState(updatedIngredients);

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
        // this.updatePurchaseState(updatedIngredients);
        this.isPurchaseable(newPrice);
    }

    purchaseHandler =  () => {
        this.setState({confirmOrder: true});
    }
    
    purchaseCancelHandler = () => {
        this.setState({confirmOrder: false});
    }

    purchaseContinueHandler = () => {
        alert('Thank you for purchasing!');
        this.setState({confirmOrder: false});
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
                <Modal show={this.state.confirmOrder} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary ingredients={this.state.ingredients}
                    cancelPurchase={this.purchaseCancelHandler}
                    continuePurchase={this.purchaseContinueHandler} 
                    totalCost={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
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