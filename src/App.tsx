import React, {useState} from 'react';
import {Site} from './components/Site'
import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";



function App() {
    return (
        <Site/>
    );
}


export default App;


