import React, { useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addInventory } from '../../actions/inventoryActions';

const AddInventory = ({ addInventory }) => {

    const [servername, setServername] = useState('');
    const [appname, setAppname] = useState('');
    const [cutoverdate, setCutoverdate] = useState('');
    const [environment, setEnvironment] = useState('');
    const [migrated, setMigrated] = useState('');
    const [movegroup, setMovegroup] = useState('');
    const [serveros, setServeros] = useState('');
    const [servertype, setServertype] = useState('');

    const onSubmit = () => {
        if(servername === '' || appname === '' || cutoverdate === '' || environment === '' || migrated === '' || movegroup === '' || serveros === '' || servertype === '') {
            M.toast({ html: 'Please enter a value'});
        } else {
            const newInventory = {
                servername,
                appname,
                cutoverdate,
                environment,
                migrated,
                movegroup,
                serveros,
                servertype
            }

            // add Inventory
            addInventory(newInventory);

            //reset fields
            setServername('');
            setAppname('');
            setCutoverdate('');
            setEnvironment('');
            setMigrated('');
            setMovegroup('');
            setServeros('');
            setServertype('');
        }
    }

    return (
        <div id='add-inventory-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Server and Migration details</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="servername" value={servername} onChange={e => setServername(e.target.value)} />
                        <label htmlFor="servername" className="active">
                            Server Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="appname" value={appname} onChange={e => setAppname(e.target.value)} />
                        <label htmlFor="appname" className="active">
                            Application Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="date" name="cutoverdate" value={cutoverdate} onChange={e => setCutoverdate(e.target.value)} />
                        <label htmlFor="cutoverdate" className="active">
                            Cutover Date
                        </label>
                    </div>
                </div>

                <div className="row">
                    <select className="browser-default" name="environment" value={environment} onChange={e => setEnvironment(e.target.value)}>
                        <option value="" disabled defaultValue>Choose environment</option>
                        <option value="DEV">DEV</option>
                        <option value="QA">QA</option>
                        <option value="STAGE">STAGE</option>
                        <option value="PROD">PROD</option>
                    </select>
                    <label htmlFor="environment" className="active">
                            Environment
                    </label>
                </div>

                <div className="row">
                    <select className="browser-default" name="migrated" value={migrated} onChange={e => setMigrated(e.target.value)}>
                        <option value="" disabled defaultValue>Choose Yes/No</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <label htmlFor="migrated" className="active">
                            Migrated to Cloud
                    </label>
                </div>

                <div className="row">
                    <select className="browser-default" name="movegroup" value={movegroup} onChange={e => setMovegroup(e.target.value)}>
                        <option value="" disabled defaultValue>Choose an option</option>
                        <option value="Group 1">Group 1</option>
                        <option value="Group 2">Group 2</option>
                        <option value="Group 3">Group 3</option>
                        <option value="Group 4">Group 4</option>
                    </select>
                    <label htmlFor="movegroup" className="active">
                            Move Group
                    </label>
                </div>

                <div className="row">
                    <select className="browser-default" name="serveros" value={serveros} onChange={e => setServeros(e.target.value)}>
                        <option value="" disabled defaultValue>Choose an option</option>
                        <option value="Windows 2008">Windows 2008</option>
                        <option value="Windows 2012">Windows 2012</option>
                        <option value="Windows 2016">Windows 2016</option>
                        <option value="RHEL">RHEL</option>
                        <option value="CentOS">CentOS</option>
                        <option value="Ubuntu">Ubuntu</option>
                    </select>
                    <label htmlFor="OS" className="active">
                            Operating System
                    </label>
                </div>

                <div className="row">
                    <select className="browser-default" name="servertype" value={servertype} onChange={e => setServertype(e.target.value)}>
                        <option value="" disabled defaultValue>Choose an option</option>
                        <option value="Application Server">Application Server</option>
                        <option value="Web Server">Web Server</option>
                        <option value="Database Server">Database Server</option>
                        <option value="FTP Server">FTP Server</option>
                        <option value="File Server">File Server</option>
                    </select>
                    <label htmlFor="servertype" className="active">
                            Server Type
                    </label>
                </div>

            </div>

            <div className="modal-footer">
                <a href='#' onClick={onSubmit} className="modal-close waves-effect waves-green btn">Submit</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default connect(null, { addInventory })(AddInventory);