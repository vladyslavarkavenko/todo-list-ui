import React from "react";
import {Navigate, Route, Routes} from 'react-router-dom';

import {ROUTES} from "../routes";

// Comment for code splitting
import Todos from "../pages/Todos";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

// Uncomment for code splitting
// const Todos = React.lazy(() => import('../pages/Todos'));
// const Login = React.lazy(() => import('../pages/Login'));
// const Signup = React.lazy(() => import('../pages/Signup'));
// const NotFound = React.lazy(() => import('../pages/NotFound'));

export const Router = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Todos/>}/>
        <Route path={ROUTES.LOGIN} element={<Login/>}/>
        <Route path={ROUTES.SIGNUP} element={<Signup/>}/>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound/>}/>
        <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace/>}/>
    </Routes>
);
