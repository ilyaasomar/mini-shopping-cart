import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ShopProvider } from "./ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopProvider>
);
