import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function DashHome() {
    return (
        <Container>
            <h3>Dashboard Home</h3>

            <Link to="/">Go back to Home</Link>

        </Container>
    );
}
