import {
  GET_INVENTORY,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT,
  ADD_INVENTORY,
  DELETE_INVENTORY,
  UPDATE_INVENTORY,
  GET_DASHBOARD_DATA,
  GET_APPS_DATA,
  GET_GB_DATA,
} from "../actions/types";

const initialState = {
  inventory: null,
  dashboard: null,
  apps: null,
  gb: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case GET_INVENTORY:
      return {
        ...state,
        inventory: action.payload,
        loading: false,
      };
    case ADD_INVENTORY:
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
        loading: false,
      };
    case UPDATE_INVENTORY:
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
        loading: false,
      };
    case DELETE_INVENTORY:
      return {
        ...state,
        inventory: state.inventory.filter(
          (i) =>
            i.server_name !== action.payload.server_name &&
            i.app_name !== action.payload.app_name
        ),
        loading: false,
      };
    case GET_DASHBOARD_DATA:
      return {
        ...state,
        dashboard: action.payload,
        loading: false,
      };
    case GET_APPS_DATA:
      return {
        ...state,
        apps: action.payload,
        loading: false,
      };
    case GET_GB_DATA:
      return {
        ...state,
        gb: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
