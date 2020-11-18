import React, { Component } from "react";

export class InventoryItem extends Component {
    constructor(props) {
        super(props)
    }

  render() {

    const { d, i, deleteInventory, setCurrent } = this.props
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
          {/* <a href="#add-inventory-modal" className="modal-trigger">
            <i className="material-icons">add</i>
          </a> */}
          <a
            href="#"
            onClick={() => deleteInventory(d.server_name, d.app_name)}
          >
            <i className="material-icons">delete</i>
          </a>
          <a
            href="#edit-inventory-modal"
            className="modal-trigger"
            onClick={() => setCurrent(d)}
          >
            <i className="material-icons">edit</i>
          </a>
        </td>
      </tr>
    );
  }
}

export default InventoryItem;
