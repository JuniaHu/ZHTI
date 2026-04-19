import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { API_BASE_URL } from "./config";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Missing #root element");
}
// 与 Netlify 一致的后端基址；需要调试或脚本读取时可查 `data-api-base`
rootEl.setAttribute("data-api-base", API_BASE_URL);

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
