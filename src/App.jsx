import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Words from "./Words.jsx";

const App = function () {
    return (
        <StrictMode>
            <div>
                <h1>Type-O</h1>
                <Words />
            </div>
        </StrictMode>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
