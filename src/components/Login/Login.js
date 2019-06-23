import React, { Component } from "react";
import { Container } from 'reactstrap';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/dashboard',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

class Login extends Component {
    render() {
        return (
            <Container>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </Container>
        )
    }
}

export default Login;
