import React, { Component } from "react";
import Modal from "../../c_burger/UI/Modal/Modal";
import Aux from "../Aux";
// import { textSpanIsEmpty } from 'typescript';
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
// import axios from '../axios-orders';
import {withRouter} from 'react-router-dom';
const withErrorHandler = (WrappedComponent, axios) => {
  console.log(axios);
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      console.log(axios);
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.reqInterceptor =axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      console.log('unmount');
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptors);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
