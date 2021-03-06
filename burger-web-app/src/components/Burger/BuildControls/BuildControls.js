import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type:'salad'},
    { label: 'Bacon', type:'bacon'},
    { label: 'Cheese', type:'cheese'},
    { label: 'Meat', type:'meat'}

    
]

const buildControls = (props) => {
        return(
            <div className={classes.buildControls}>
                <p> Current Price: <strong>{props.burgerPrice.toFixed(2)}</strong> </p>
            {controls.map(ctrl => (
                <BuildControl 
                    more={()=> props.addIngredient(ctrl.type)}
                    less={()=> props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    key={ctrl.label} 
                    label={ctrl.label} />
            ))} 

             <button 
             className={classes.OrderButton}
             onClick={props.ordered}
             disabled={!props.purchaseable}> ORDER NOW </button>         
        </div>
        );
   
};

export default buildControls;