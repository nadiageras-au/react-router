import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import styled from "styled-components";


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <nav className={styles.nav}>
                    <div>
                        <NavLink
                            to={'/page1'}
                            className={({isActive})=>isActive ? styles.active : styles.navLink}>
                            Page 1
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={'/page2'}
                            className={({isActive})=>isActive ? styles.active : styles.navLink}>
                        Page 2
                    </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/page3'}
                                 className={({isActive})=>isActive ? styles.active : styles.navLink}>
                        Page 3
                    </NavLink>
                    </div>

                </nav>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page1"}/>}/>
                        <Route path="/page1" element={<PageOne/>}/>
                        <Route path="/page2" element={<PageTwo/>}/>
                        <Route path="/page3" element={<PageThree/>}/>
                        <Route path="/error404" element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to={"/error404"}/>}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;

const NavWrapper = styled.div`
margin-left: 10px;
  font-size: 20px;
  
  & > a {
    text-decoration: none;
    color: #1e3786;
  }
  
  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }
  
  & > a:hover {
    color: steelblue;
  }
`
