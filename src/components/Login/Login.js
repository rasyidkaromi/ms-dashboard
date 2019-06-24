import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/dashboard',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ]
};

class Login extends Component {
    render() {
        return (
            <div className="fluid form-box">
                <Row>
                    <Col md="6" className="login-left">

                        <div className="container">
                            <form className="white" onSubmit={this.handleSubmit}>
                                <h5 className="grey-text text-darken-3">Sign In</h5>
                                <div className="input-field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='email' onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='password' onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <button className="btn indigo darken-4 z-depth-0">Login</button>
                                </div>
                            </form>
                        </div>
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
