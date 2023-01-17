import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import IndexProvider from "./context/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IndexProvider>
    <App />
  </IndexProvider>
);
