import { createStore, combineReducers } from "redux";
import { setReducerData, setSelectedData, setTokenData } from "./reducer";

const combine = combineReducers({
  setAllProduct: setReducerData,
  setSelectedData,
  setTokenData,
});

export const Store = createStore(combine);
