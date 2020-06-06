import React, { Component } from "react";
import Button from "../../../c_burger/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../c_burger/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients, this.props.price, 'dor');
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Sulistyo Ardani",
        address: {
          street: "Jln. Ngawonggo Gg.Sadewo",
          zipcode: 55292,
          country: "Yk",
        },
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"></input>
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your email"></input>
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"></input>
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"></input>
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner></Spinner>;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
