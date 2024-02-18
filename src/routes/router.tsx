import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import {Error404} from "../components/pages/Error404";
import Model from "../components/pages/Model";
import React from "react";
import {Adidas} from "../components/pages/Adidas";
import {adidasArr} from "../components/Site";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Page} from "../components/pages/Page";
import {dataState} from "../dataState/dataState";
import {Protected} from "../components/pages/Protected";
import {ProtectedRoute} from "../components/pages/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: '/adidas',
                element: (
                    <Adidas items={adidasArr}/>
                ),
            },
            {
                path: '/adidas/:id',
                element: (
                    <Model/>
                ),
            },
            {
                path: '/puma',
                element: (
                    <Puma/>
                )
            },
            {
                path: '/abibas',
                element: (
                    <Abibas/>
                )
            },
            {
                path: '/protected',
                element: (
                    <ProtectedRoute>
                        <Protected/>
                    </ProtectedRoute>

                )
            },
            {
                path: '/error',
                element: (
                    <Error404/>
                )
            },
        ]
    }
])