import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Container, Col, Card } from 'reactstrap';
import PlotChart from '../Charts/PlotChart';
import Nav from './Nav';
import Test from '../Charts/Test';

export default function DashHome() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(result => setData(result.data));
    }, []);

    return (
        <div>
            <Row className="margin-fix">
                <Nav />
                
                <Col lg="10">

                    <PlotChart />

                    <Container className="dash-wrap">
                        <Row className="text-center spacer">

                            <Col lg="4">
                                <Card>
                                    <Test />
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <Test />
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <Test />
                                </Card>
                            </Col>

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