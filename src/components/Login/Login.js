import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/dashboard',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

class Login extends Component {
    render() {
        return (
            <div className="fluid form-box">
                <Row>
                    <Col md="6" className="login-left">
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </Col>

                    <Col md="6" className="login-right">
                        <p>Coming soon. Possibility a background image or gradient.</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Login;
