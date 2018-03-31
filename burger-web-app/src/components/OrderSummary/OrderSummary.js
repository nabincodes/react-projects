import React, {Component} from 'react';

import Aux from '../../hoc/Auxi';
import Button from '../UI/Button/Button';

class OrderSummary extends Component {
    render() {

        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey =>{
            return (<li key={igKey}><span style={{textTransform: 'capitalize'}}> {igKey}</span> : {this.props.ingredients[igKey]} </li>);
        });

        return (
            <Aux>
            <h3> Order Summary </h3>
            <p> Your delicious burger contain the following ingredients: </p>

            <ul>
                {ingredientSummary}
            </ul>

            <p><strong>Burger Total Cost: ${this.props.totalCost.toFixed(2)} </strong></p>

            <p> Continue to Checkout </p>
            <Button 
                clicked={this.props.cancelPurchase} 
                btnType="Danger">CANCEL </Button>

            <Button 
                clicked={this.props.continuePurchase} 
                btnType="Success">CONTINUE </Button>
            
        </Aux>
        );
    }

}





export default OrderSummary;