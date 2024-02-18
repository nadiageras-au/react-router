import React, {useEffect, useState} from 'react';
import {v1} from "uuid";
import {useParams} from "react-router-dom";
import styles from "../Site.module.css";
import {S} from "./_styles";
import {adidasArr} from "../Site";




const Model = () => {
    const params = useParams();
    console.log(params)
    console.log(typeof(params.id))
    //console.log(adidasArr[params[0]])

    return (
        <div className={styles.wrapper}>
            <h2>{adidasArr[Number(params.id)].model}</h2>
            <p>{adidasArr[Number(params.id)].collection}</p>
            <S.StyledImg src={adidasArr[Number(params.id)].picture} width='550px'/>
            <p>{adidasArr[Number(params.id)].price}</p>
        </div>

    );
};

export default Model;