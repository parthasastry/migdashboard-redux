import React, { useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addInventory, getInventory } from '../../actions/inventoryActions';
import { ref_environments, ref_movegroups, ref_os, ref_servertypes } from '../../data/referenceData';

const AddInventory = ({ addInventory, getInventory }) => {

    const [servername, setServername] = useState('');
    const [appname, setAppname] = useState('');
    const [cutoverdate, setCutoverdate] = useState('');
    const [environment, setEnvironment] = useState('');
    const [migrated, setMigrated] = useState('');
    const [movegroup, setMovegroup] = useState('');
    const [serveros, setServeros] = useState('');
    const [servertype, setServertype] = useState('');
    const [GB, setGB] = useState('');

    const onSubmit = () => {
        if(servername === '' || appname === '' || cutoverdate === '' || environment === '' || migrated === '' || movegroup === '' || serveros === '' || servertype === '' || GB === '') {
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
                servertype,
                GB
            }

            // add Inventory
            addInventory(newInventory);

            getInventory();
            
            //reset fields
            setServername('');
            setAppname('');
            setCutoverdate('');
            setEnvironment('');
            setMigrated('');
            setMovegroup('');
            setServeros('');
            setServertype('');
            setGB('');
        }
    }

    const environment_options = ref_environments.map(e => <option value={e}>{e}</option>)
    const movegroup_options = ref_movegroups.map(e => <option value={e}>{e}</option>)
    const os_options = ref_os.map(e => <option value={e}>{e}</option>)
    const servertype_options = ref_servertypes.map(e => <option value={e}>{e}</option>)

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
                        {/* <option value="DEV">DEV</option>
                        <option value="QA">QA</option>
                        <option value="STAGE">STAGE</option>
                        <option value="PROD">PROD</option> */}
                        {environment_options}
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
                        {/* <option value="Group 1">Group 1</option>
                        <option value="Group 2">Group 2</option>
                        <option value="Group 3">Group 3</option>
                        <option value="Group 4">Group 4</option> */}
                        {movegroup_options}
                    </select>
                    <label htmlFor="movegroup" className="active">
                            Move Group
                    </label>
                </div>

                <div className="row">
                    <select className="browser-default" name="serveros" value={serveros} onChange={e => setServeros(e.target.value)}>
                        <option value="" disabled defaultValue>Choose an option</option>
                        {/* <option value="Windows 2008">Windows 2008</option>
                        <option value="Windows 2012">Windows 2012</option>
                        <option value="Windows 2016">Windows 2016</option>
                        <option value="RHEL">RHEL</option>
                        <option value="CentOS">CentOS</option>
                        <option value="Ubuntu">Ubuntu</option> */}
                        {os_options}
                    </select>
                    <label htmlFor="OS" className="active">
                            Operating System
                    </label>
                </div>

                <div className="row">
                    <select className="browser-default" name="servertype" value={servertype} onChange={e => setServertype(e.target.value)}>
                        <option value="" disabled defaultValue>Choose an option</option>
                        {/* <option value="Application Server">Application Server</option>
                        <option value="Web Server">Web Server</option>
                        <option value="Database Server">Database Server</option>
                        <option value="FTP Server">FTP Server</option>
                        <option value="File Server">File Server</option> */}
                        {servertype_options}
                    </select>
                    <label htmlFor="servertype" className="active">
                            Server Type
                    </label>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="GB" value={GB} onChange={e => setGB(e.target.value)} />
                        <label htmlFor="GB" className="active">
                            Gigabytes (GB)
                        </label>
                    </div>
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

export default connect(null, { addInventory, getInventory })(AddInventory);