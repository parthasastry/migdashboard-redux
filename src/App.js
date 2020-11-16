import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import store from "./store";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Dashboard from './components/dashboard/Dashboard';
import About from "./components/About";
import Footer from "./components/layout/Footer";

import Inventory from "./components/admin/Inventory";
import AddInventory from "./components/admin/AddInventory";
import EditInventory from "./components/admin/EditInventory";

const App = () => {
  //Initialize Materialize JS
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <AddInventory />
          <EditInventory />


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/search">
              <Inventory />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Fragment>

        <Footer />

      </Router>
    </Provider>
  );
};

export default App;
