import React, { Component } from "react";
import { connect } from "react-redux";

import aux from "../../hoc/Aux";
import Burger from "../../c_burger/Burger";
import BuildControl from "../../c_burger/BuildControls/BuildControl";
import Modal from "../../c_burger/UI/Modal/Modal";
import OrderSummary from "../../c_burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../c_burger/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/action";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    // ingredients: null,
    totalPrice: 4,
    // purchaseable: false,
    purchasing: false,
    loader: false,
    error: false,
  };

  componentDidMount() {
    // console.log(this.props, 'tes');
    console.log(this.props.ings);
    // axios.get('/ingredients.json')
    // .then(response => {
    //     console.log(response);
    //     this.setState({ingredients: response.data});
    // })
    // .catch(error => {
    //     this.setState({error: true});
    // })
  }
  updatePurchaseState(ingredients) {
    // const ingredients = {
    //     ...this.state.ingredients
    // };
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCounted = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCounted;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    //   alert('You countinued order')
    // console.log('')

    const queryParams = [];
    queryParams.push("price=" + this.state.totalPrice);
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
      // ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p className="mt-5 jumbotron">
        Sorry our page failed to load, cause fetch data from server is error :((
      </p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      // if(this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.props.ings} />

          <BuildControl
            // ingredientAdded={this.addIngredientHandler}
            // ingredientRemoved={this.removeIngredientHandler}
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchaseable={this.props.beli}
            ordered={this.purchaseHandler}
            price={this.props.price}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price = {this.props.price}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
      if (this.state.loading) {
        orderSummary = <Spinner className="mt-5 jumbotron"></Spinner>;
        console.log("pernahmasuk", orderSummary);
      }
    }
    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.ingredients);
  return {
    ings: state.ingredients,
    beli: state.purchaseable,
    price: state.totalPrice
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: ingName,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(withErrorHandler(BurgerBuilder, axios));
