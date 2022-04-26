import {
  ADD_DATA,
  SELECTED_PRODUCT,
  REMOVESELECTED,
  TOKEN_DATA,
  REMOVE_TOKEN_DATA,
} from "./constant";

export const setReducerData = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return payload;
    default:
      return state;
  }
};

export const setSelectedData = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return payload;
    case REMOVESELECTED:
      return payload;
    default:
      return state;
  }
};

export const setTokenData = (state = {}, { type, payload }) => {
  switch (type) {
    case TOKEN_DATA:
      return payload;
    case REMOVE_TOKEN_DATA:
      return payload;
    default:
      return state;
  }
};
