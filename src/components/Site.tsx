import React from 'react';
import styles from "./Site.module.css";
import {S} from "./pages/_styles";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Page} from "./pages/Page";
import {dataState} from "../dataState/dataState";

export const PATH = {
    PAGE: '/page',
    PAGE1: '/page/0',
    PAGE2: '/page/1',
    PAGE3: '/page/2',
    ERROR404: '/error404',
}

export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <nav className={styles.nav}>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE1}>
                            Page 1
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE2}>
                            Page 2
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE3}>
                            Page 3
                        </NavLink>
                    </S.NavWrapper>

                </nav>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page"}/>}/>
                        <Route path="/page/:id" element={<Page pages={dataState.pages}/>}/>
                        {/*<Route path={PATH.PAGE} element={<PageOne/>}/>*/}
                        {/*<Route path={PATH.PAGE} element={<PageTwo/>}/>*/}
                        {/*<Route path={PATH.PAGE} element={<PageThree/>}/>*/}
                        <Route path="/*" element={PATH.ERROR404}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
};

