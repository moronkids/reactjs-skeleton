import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {PrivateRoute} from './support/helpers/privateRoute';
// import PrivateRoute from './support/helpers/privateRoute';
import Login from './c_login/tes';
import Home from './c_home/home';
// import MaterialIcon from 'react-material-iconic-font'

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/home" component={Home} />
    </Router>
  );
}

export default App;
