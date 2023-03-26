import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, LinearProgress, ThemeProvider} from "@mui/material";

import {store} from '../store';
import {Router} from './Router';
import theme from "../theme";

export const App = () => {
    return (
        <Provider store={store}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <React.Suspense fallback={<LinearProgress/>}>
                        <Router/>
                    </React.Suspense>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
        ;
};
