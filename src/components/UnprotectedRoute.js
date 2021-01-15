import React from 'react';
import {Route,Redirect} from "react-router-dom";
import auth from "./Auth";

export const UnprotectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            (props) => {
                if (localStorage.getItem("user")){
                    auth.login(()=>{});
                }
                if (!auth.isAuthenticated()){
                    return <Component {...props} />
                }
                else{
                    return <Redirect to={
                        {
                            pathname: "/homepage",
                            state:{
                                from: props.location
                            }
                        }
                    }/>;
                }

            }} />
    );
};
