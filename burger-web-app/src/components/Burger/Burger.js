import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let userIngredients = Object.keys(props.ingredients).map(igKey => { 
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey +i} type={igKey}/>;
        });        
    })
    .reduce((arr, el)=> {            
        return arr.concat(el)
    }, []);    
    
    if(userIngredients.length===0){
        userIngredients = <div>Add some ingredients </div>
    }

    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top"/>          
            {userIngredients}            
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;