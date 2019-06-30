import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Container, Col } from 'reactstrap';
import Example from '../Charts/Example';
import Nav from './Nav';

export default function DashHome() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(result => setData(result.data));
    }, []);


    return (
        <div>
            <Row>
                <Nav />
                <Col lg="10">

                    <Example />

                    <Container>
                            <Row className="spacer">
                                <Col lg="3">Block</Col>

                                <Col lg="3" offset="3">Block</Col>

                                <Col lg="3">Block</Col>

                                <Col lg="3">Block</Col>

                            </Row>

                            <Row>
                                <ul>
                                    {data.map(item => (
                                        <li key={item.username}>
                                            {item.username}: {item.name}
                                        </li>
                                    ))}
                                </ul>

                            </Row>
                   
                    </Container>
                </Col>
            </Row>
        </div>
    );
}