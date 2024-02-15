import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {Route, useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";


type PagesProps = {
    pages: PagesType[]
}

export const Page = ({pages}: PagesProps) => {
    const params = useParams()

    const location = useLocation()
    // console.log(location.pathname)
    // console.log(params)

    return (
        <>
            {location.pathname === '/page/0' && <div> I can put here additional text/element</div>}
            {pages[Number(params.id)]
            ?
            <div>
                <div>{pages[Number(params.id)].heading}</div>
                <div>{pages[Number(params.id)].about}</div>
            </div>
            :
            <Error404/>
            }
        </>

    );
};

