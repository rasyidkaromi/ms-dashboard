import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Container, Col } from 'reactstrap';
import Example from '../Charts/Example';

export default function DashHome() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(result => setData(result.data));
    }, []);


    return (
        <Container>

            <Row>
                <Col lg="12">
                    <Example />
                </Col>
            </Row>

            <Row>
                <Col lg="4">Block</Col>

                <Col lg="4">Block</Col>

                <Col lg="4">Block</Col>
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
    );
}