import {
  ADD_DATA,
  SELECTED_PRODUCT,
  REMOVESELECTED,
  TOKEN_DATA,
  REMOVE_TOKEN_DATA,
} from "./constant";

export const setActionData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};

export const setSelectedProduct = (data) => {
  return {
    type: SELECTED_PRODUCT,
    payload: data,
  };
};

export const removeSelected = () => {
  return {
    type: REMOVESELECTED,
    payload: {},
  };
};

export const setToken = (data) => {
  return {
    type: TOKEN_DATA,
    payload: data,
  };
};

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN_DATA,
    payload: {},
  };
};
