import React, {useEffect, useState} from 'react';
import styles from "./Site.module.css";
import {S} from "./pages/_styles";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Adidas} from "./pages/Adidas";
import {Puma} from "./pages/Puma";
import {Abibas} from "./pages/Abibas";
import {Page} from "./pages/Page";
//import {models, adidasArr} from "./pages/Adidas";
import Model from "./pages/Model";
import adidasModel1 from "../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import adidasModel2 from "../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import adidasModel3
    from "../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";
import {v1} from "uuid";


export type AdidasItemType = {
    model: string
    collection: string
    price: string
    picture: string
    idModel: string
}

export const PATH = {
    PAGE: '/',
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/adidas/:id',
    ERROR404: '/error404',
} as const;


export const adidasArr: AdidasItemType[] = [
    {
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,
        idModel: '0',
    },
    {
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2,
        idModel:'1',
    },
    {
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3,
        idModel: '2',
    }
]
export const Site = () => {


    //
    //
    //
    // return (
    //     <div>
    //         {/*<div className={styles.header}><h1>HEADER</h1></div>*/}
    //         {/*<div className={styles.body}>*/}
    //         {/*    <nav className={styles.nav}>*/}
    //         {/*        <S.NavWrapper>*/}
    //         {/*            <NavLink to={PATH.PAGE1}>*/}
    //         {/*                Adidas*/}
    //         {/*            </NavLink>*/}
    //         {/*        </S.NavWrapper>*/}
    //         {/*        <S.NavWrapper>*/}
    //         {/*            <NavLink to={PATH.PAGE2}>*/}
    //         {/*                Puma*/}
    //         {/*            </NavLink>*/}
    //         {/*        </S.NavWrapper>*/}
    //         {/*        <S.NavWrapper>*/}
    //         {/*            <NavLink to={PATH.PAGE3}>*/}
    //         {/*                Abibas*/}
    //         {/*            </NavLink>*/}
    //         {/*        </S.NavWrapper>*/}
    //
    //         {/*    </nav>*/}
    //         {/*    <div className={styles.content}>*/}
    //         {/*        <Routes>*/}
    //         {/*            <Route path="/" element={<Navigate to={"/adidas"}/>}/>*/}
    //     {/*                /!*<Route path="/page/:id" element={<Page pages={dataState.pages}/>}/>*!/*/}
    //     {/*                <Route path={PATH.PAGE1} element={<Adidas items={adidasArr}/>}/>*/}
    //     {/*                <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
    //     {/*                <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
    //     {/*                <Route path={PATH.PAGE4} element={<Model/>}/>*/}
    //     {/*                <Route path="/*" element={PATH.ERROR404}/>*/}
    //     {/*            </Routes>*/}
    //
    //     {/*        </div>*/}
    //     {/*    </div>*/}
    //     {/*    <div className={styles.footer}>abibas 2023</div>*/}
    //     {/*</div>*/}
    // );
};

