import React from 'react';
// import {Router,Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Switch, Route,  } from "react-router-dom";
import {PrivateRoute} from './support/helpers/privateRoute';
// import PrivateRoute from './support/helpers/privateRoute';
import Login from './c_login/tes';
import Home from './c_home/home';
import Layout from './c_home/layout';
import Checkout from './containers/Checkout/Checkout';
// import MaterialIcon from 'react-material-iconic-font'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={Layout} />
        {/* <PrivateRoute path="/dor/home" component={Home} />
        <Route path="/(login|)" component={Login} /> */}
      </Switch>
    </Router>
  );
}

export default App;