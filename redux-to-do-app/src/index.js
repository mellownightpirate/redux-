import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { formReducer, listReducer } from "./state/reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// STEP-4 USE combineReducers FROM redux TO MAKE A SINGLE REDUCER
const combinedReducer = combineReducers({
  formValues: formReducer,
  todoList: listReducer
});

// STEP-5 USE createStore FROM redux TO MAKE A STATE STORE
const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(

  // STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM react-redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
