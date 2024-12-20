/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
