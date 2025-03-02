import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Words from "./Words.jsx";
import "./App.css";
import Copyright from "./Copyright.jsx";

const App = function () {
    return (
        <StrictMode>
            <div>
                <h1>Type-O</h1>
                <Words />
                <Copyright />
            </div>
        </StrictMode>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
