import React, {Component} from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 2,
            bacon: 0,
            meat: 1
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;