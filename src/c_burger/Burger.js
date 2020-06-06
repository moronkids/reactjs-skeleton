import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = (props)  => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey =>{
        return[...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    // console.log(transformedIngredients);
    // if (Array.isArray(transformedIngredients)) {
    //     console.log('masuk')
    //     transformedIngredients = <p>Please start adding ingredients</p>;
    // }
    // console.log({dor: transformedIngredients});


    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}

export default burger;