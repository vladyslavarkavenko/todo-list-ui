import React, {StrictMode} from "react";
import ReactDOM from "react-dom";

import {App} from "./components/App";
import {ErrorBoundary} from "./components/ErrorBoundary";

ReactDOM.render(
    <StrictMode>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </StrictMode>,
    document.getElementById("root")
);
