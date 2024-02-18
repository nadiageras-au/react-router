import {ReactComponentElement} from "react";
import {Navigate} from "react-router-dom";

type PropsType= {
    children: ReactComponentElement<any>
}

export const ProtectedRoute = ({children}:PropsType)=>{
    const logged = false

    return logged
        ? children : <Navigate to='/page/:error'/>
};

