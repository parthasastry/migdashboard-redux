import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import InventoryItem from "./InventoryItem";

import {
  getInventory,
  deleteInventory,
  setCurrent,
  getSearchResults,
} from "../../actions/inventoryActions";
import Preloader from "../layout/Preloader";

const Inventory = ({
  inventoryReducer: { inventory, loading, searchResults },
  getInventory,
  deleteInventory,
  setCurrent,
  getSearchResults,
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    getInventory();
  }, []);

  if (loading || inventory === null) {
    return <Preloader />;
  }

  const tableHeader = (
    <thead>
      <tr>
        <th>Server</th>
        <th>Application</th>
        <th>Cutover Date</th>
        <th>Environment</th>
        <th>Migrated</th>
        <th>Group</th>
        <th>OS</th>
        <th>Server Type</th>
        <th>Gigabytes</th>
        <th>Action</th>
      </tr>
    </thead>
  );

  const tableData = searchResults.map((d, i) => {
    return (
      <InventoryItem
        key={i}
        d={d}
        i={i}
        deleteInventory={deleteInventory}
        setCurrent={setCurrent}
      />
    );
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
    getSearchResults(inventory, search);
    setSearch("");
  };

  return (
    <div>
      <br />
      <div className="row center">
        <div className="col s12 m6">
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input
              type="text"
              name="search"
              value={search}
              placeholder="enter search text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <label htmlFor="servername" className="active">
              Enter Server or App name
            </label>
            <a
              href="#"
              onClick={onSubmit}
              className="waves-effect waves-green btn"
            >
              Submit
            </a>
          </div>
        </div>

        <div className="col s12 m6">
          <label>Add a new Configuration Item</label>
          <br />
          <br />
          <a
            href="#add-inventory-modal"
            className="btn-floating btn-large modal-trigger"
          >
            <i className="large material-icons">add</i>
          </a>
        </div>
      </div>

      <hr />

      <table className="striped centered">
        {tableHeader}
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  inventoryReducer: state.inventoryReducer,
});

export default connect(mapStateToProps, {
  getInventory,
  deleteInventory,
  setCurrent,
  getSearchResults,
})(Inventory);
