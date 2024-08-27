import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import PlanetContextsProvider from "./contexts/planetContexts.jsx";

createRoot(document.getElementById("root")).render(
<PlanetContextsProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
    </PlanetContextsProvider>
);
