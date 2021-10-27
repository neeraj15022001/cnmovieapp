import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./services/reducers";
import thunk from "redux-thunk"

const logger = ({dispatch, getState}) => (next) => (action) => {
    if (typeof action !== "function")
        console.log("ACTION_TYPE= ", action.type);
    next(action)
}
// const thunk = ({dispatch, getState}) => (next) => (action) => {
//     if(typeof action === "function") {
//         action(dispatch);
//         return;
//     }
//     next(action)
// }
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const app = <App store={store}/>;
const root = document.getElementById("root");
ReactDOM.render(app, root);
