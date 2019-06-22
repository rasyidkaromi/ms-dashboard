import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    render() {
        return (
            <Container>
                <h2>Welcome to Login Page!</h2>

                <Link to="/dashboard">Go to Dashboard Home</Link>
            </Container>
        )
    }
}


export default Login;
