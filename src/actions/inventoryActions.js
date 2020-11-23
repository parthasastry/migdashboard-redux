import { GET_INVENTORY, SET_LOADING, SET_CURRENT, LOGS_ERROR, ADD_INVENTORY, UPDATE_INVENTORY, DELETE_INVENTORY, GET_DASHBOARD_DATA, GET_APPS_DATA, GET_GB_DATA, GET_SEARCH_RESULTS   } from './types';
import axios from 'axios';

// get all inventory items
export const getInventory = (searchText='') => async dispatch => {
    try {
        setLoading();

        const url = 'https://lpywo58r43.execute-api.us-east-1.amazonaws.com/dev/inventory'
        let res = await axios.get(url);

        let data = res.data;

        if(searchText){
            let search = searchText.toLowerCase();
            data = data.filter(d => d.server_name.toLowerCase().includes(search) || d.app_name.toLowerCase().includes(search));
        }
        
        dispatch({
            type: GET_INVENTORY,
            payload: data
        });

    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//Searh Results
export const getSearchResults = (inventory, searchText) => async dispatch => {
    try {
        setLoading();

        let search = searchText.toLowerCase();
        const data = inventory.filter(d => d.server_name.toLowerCase().includes(search) || d.app_name.toLowerCase().includes(search));
        
        dispatch({
            type: GET_SEARCH_RESULTS,
            payload: data
        });

    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//add Log
export const addInventory = (inventory) => async dispatch => {
    try {
        setLoading();

        // add Inventory
        const url = 'https://lpywo58r43.execute-api.us-east-1.amazonaws.com/dev/inventory'
        const res = await axios.post(url, inventory);
        const data = res.data;

        dispatch({
            type: ADD_INVENTORY,
            payload: data
        });
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//Update inventory item
export const updateInventory = (inventory) => async dispatch => {
    try {
        setLoading();

        // add Inventory
        const url = 'https://lpywo58r43.execute-api.us-east-1.amazonaws.com/dev/inventory'
        const res = await axios.patch(url, inventory);
        const data = res.data;

        dispatch({
            type: UPDATE_INVENTORY,
            payload: data
        });
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//Delete inventory
export const deleteInventory = (serverid, appid) => async dispatch => {
    console.log("in deleteInventory, serverid: ", serverid, " appid: ", appid)
    try {
        setLoading();

        const url = `https://lpywo58r43.execute-api.us-east-1.amazonaws.com/dev/inventory?serverid=${serverid}&appid=${appid}`;
        
        await axios.delete(url)

        dispatch({
            type: DELETE_INVENTORY,
            payload: {
                server_name: serverid,
                app_name: appid
            }
        });
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//set current action
export const setCurrent = (inventory) => {
    return {
        type: SET_CURRENT,
        payload: inventory
    }
}

//set loading flag
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

// get dashboard data
export const getDashboardData = () => async dispatch => {
    try {
        setLoading();

        const url = 'https://lpywo58r43.execute-api.us-east-1.amazonaws.com/dev/burndown'
        let res = await axios.get(url);

        let data = res.data
        
        dispatch({
            type: GET_DASHBOARD_DATA,
            payload: data
        });

    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// get dashboard data
export const getAppsData = () => async dispatch => {
    try {
        setLoading();

        const url = 'https://lpywo58r43.execute-api.us-east-1.amazonaws.com/dev/apps'
        let res = await axios.get(url);

        let data = res.data
        
        dispatch({
            type: GET_APPS_DATA,
            payload: data
        });

    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// get dashboard data
export const getGBData = () => async dispatch => {
    try {
        setLoading();

        const url = 'https://lpywo58r43.execute-api.us-east-1.amazonaws.com/dev/gb'
        let res = await axios.get(url);

        let data = res.data
        
        dispatch({
            type: GET_GB_DATA,
            payload: data
        });

    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}