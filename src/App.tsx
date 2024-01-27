import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";

const PATH = {
    PAGE1:'/page1',
    PAGE2:'/page2',
    PAGE3:'/page3',
    ERROR404: '/error404',

}
function App() {
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
                        <Route path="/" element={<Navigate to={"/page1"}/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>
                        <Route path="/*" element={PATH.ERROR404}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;


