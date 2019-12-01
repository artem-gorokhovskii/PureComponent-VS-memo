import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { Parent } from "./Parent";

const store = createStore(() => ({}));

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><Parent /></Provider>, rootElement);
