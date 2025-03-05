// You will not need to modify this file

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


// After

const root = createRoot(document.getElementById('root') as HTMLElement); // createRoot(container!) if you use TypeScript

root.render(<App/>);
root.render(
    
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

