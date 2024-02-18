import React, {useEffect, useState} from 'react';
import {adidasArr, PATH, Site} from './components/Site'
import styles from "./components/Site.module.css";
import {Link, Navigate, NavLink, Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";
import Model from "./components/pages/Model";
import {useWindowSize} from "./helpers/useWindowSize";


function App() {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate(-1)
    }

    const windowSize = useWindowSize()
    // console.log(windowSize)

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {windowSize > 900
                    ? <nav className={styles.nav}>
                        <S.NavWrapper>
                            <NavLink to={PATH.PAGE1}>
                                Adidas
                            </NavLink>
                        </S.NavWrapper>
                        <S.NavWrapper>
                            <NavLink to={PATH.PAGE2}>
                                Puma
                            </NavLink>
                        </S.NavWrapper>
                        <S.NavWrapper>
                            <NavLink to={PATH.PAGE3}>
                                Abibas
                            </NavLink>
                        </S.NavWrapper>

                    </nav>
                    : <div></div>}

                <div className={styles.content}>
                    <Link className={styles.buttonLink} to='/'> Home Page </Link>
                    <button className={styles.buttonLink} onClick={onClickHandler}>Back</button>

                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>

        </div>

    );
}


export default App;


