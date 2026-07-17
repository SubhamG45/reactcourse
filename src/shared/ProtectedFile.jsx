import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protected = ({children}) => {

    let loggedin = true;

    if (!loggedin){
        return <Navigate to={"/login" } />
    }else{
        return children ?  children : <Outlet />
    }
}

export default Protected
