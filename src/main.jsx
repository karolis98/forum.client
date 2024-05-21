import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalLayout } from "./utils/GlobalLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalLayout>
      <App />
    </GlobalLayout>
  </React.StrictMode>
);
