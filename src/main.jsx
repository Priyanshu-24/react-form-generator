import "./index.css";

import App from "./App.jsx";
import { FormProvider } from "./context/FormContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormProvider>
      <App />
      <Toaster />
    </FormProvider>
  </React.StrictMode>
);
