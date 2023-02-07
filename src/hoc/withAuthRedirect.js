import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});


export const withAuthRedirect = (Component) => {

    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login' />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(NavigateComponent)

    return ConnectedAuthRedirectComponent;

}

export const withNavigate = (Component) => {
    let RedirectTo = (props) => {
        return < Component {...props} navigate={useNavigate()} />
    }
    return RedirectTo;
}