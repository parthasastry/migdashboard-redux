import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import store from './store';

import Inventory from './components/admin/Inventory';
import AddInventory from './components/admin/AddInventory';
import EditInventory from './components/admin/EditInventory';

const App = () => {
  //Initialize Materialize JS
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
         <Fragment>
            <div className="container">
                <Inventory />
                <AddInventory />
                <EditInventory />
            </div>
        </Fragment>
    </Provider>
  );
}

export default App;
