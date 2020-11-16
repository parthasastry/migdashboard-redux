import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getInventory, deleteInventory, setCurrent } from "../../actions/inventoryActions";
import Preloader from "../layout/Preloader";

const Inventory = ({
  inventoryReducer: { inventory, loading },
  getInventory,
  deleteInventory,
  setCurrent
}) => {
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

  const tableData = inventory.map((d, i) => {
    return (
      <tr key={i}>
        <td>{d.server_name}</td>
        <td>{d.app_name}</td>
        <td>{d.cutover_date}</td>
        <td>{d.environment}</td>
        <td>{d.migrated}</td>
        <td>{d.move_group}</td>
        <td>{d.server_os}</td>
        <td>{d.server_type}</td>
        <td>{d.GB}</td>
        <td>
          <a 
            href="#add-inventory-modal" 
            className="modal-trigger">
            <i className="material-icons">add</i>
          </a>
          <a
            href="#"
            onClick={() => deleteInventory(d.server_name, d.app_name)}
          >
            <i className="material-icons">delete</i>
          </a>
          <a 
            href="#edit-inventory-modal" 
            className="modal-trigger" 
            onClick={() => setCurrent(d)}>
            <i className="material-icons">edit</i>
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div>
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

export default connect(mapStateToProps, { getInventory, deleteInventory, setCurrent })(Inventory);
