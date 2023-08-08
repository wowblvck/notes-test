import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import { AppProvider } from "./store/app.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
