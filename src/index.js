import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./app";
const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <App title="React Boilerplate" />
  </StrictMode>,
  rootElement
);
// import { sum } from "./sum.js";
// //const { sum } = require("./sum.js");

// console.log("Hello World!!!");

// console.log(`Sum of 2,3 is ${sum(2, 3)}`);
