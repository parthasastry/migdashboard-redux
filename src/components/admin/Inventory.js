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
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(15);

  useEffect(() => {
    getInventory();
    
  }, []);

  if (loading || inventory === null) {
    return <Preloader />;
  }

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  let currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult)

  const pages = []
  for (let i = 1; i <= Math.ceil(searchResults.length / resultsPerPage); i++) {
      pages.push(i);
  }

  const pagination =  <ul className="pagination">
  <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
  {pages.map(number => {
      const className = number === currentPage ? "waves-effect active" : "waves-effect"
      return (
          <li 
              key={number} 
              className={className}
          >
              <a onClick={() => setCurrentPage(number)} href="#!">{number}</a>
          </li>)
  })}
  <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
</ul>

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

  // const tableData = searchResults.map((d, i) => {
  const tableData = currentResults.map((d, i) => {
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
    console.log("fetching search results for ", search)
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

      {pagination}
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
