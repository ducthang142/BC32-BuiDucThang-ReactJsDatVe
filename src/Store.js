import { createStore, combineReducers } from "redux";
import datveReducer from "./Reducers/datveReducer";

const reducer = combineReducers({
  datve: datveReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;

