import React from 'react';

import Aux from '../../hoc/Auxi';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
        return (<li key={igKey}><span style={{textTransform: 'capitalize'}}> {igKey}</span> : {props.ingredients[igKey]} </li>);
    });

    return (
        <Aux>
            <h3> Order Summary </h3>
            <p> Your delicious burger contain the following ingredients: </p>

            <ul>
                {ingredientSummary}
            </ul>

            <p><strong>Burger Total Cost: ${props.totalCost.toFixed(2)} </strong></p>

            <p> Continue to Checkout </p>
            <Button 
                clicked={props.cancelPurchase} 
                btnType="Danger">CANCEL </Button>

            <Button 
                clicked={props.continuePurchase} 
                btnType="Success">CONTINUE </Button>
            
        </Aux>
    );
};

export default orderSummary;