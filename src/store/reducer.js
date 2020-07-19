import * as actionTypes from "./action";
import { satisfies } from "semver";

const intialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },

  totalPrice: 0,
  purchaseable: false,
};
const price = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        purchaseable: true,
        totalPrice: state.totalPrice + price[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENTS:
      //   return {
      //     ...state,
      //     ingredients: {
      //       ...state.ingredients,
      //       [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      //     },
      //     purchaseable: [...(state.totalPrice === 0 ? false : true)],
      //   };
      let data = {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
      };
      const sum =
        data.ingredients.salad +
        data.ingredients.bacon +
        data.ingredients.cheese +
        data.ingredients.meat;
      data.purchaseable = sum != 0 ? true : false;
      data.totalPrice = data.totalPrice - price[action.ingredientName]
      console.log(data, 'kbh',action.ingredientName)
      return data;
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
