import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from 'reactstrap';

export default function DashHome() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(result => setData(result.data));
    }, []);


    return (
        <Container>
            <ul>
                {data.map(item => (
                    <li key={item.username}>
                        {item.username}: {item.name}
                    </li>
                ))}
            </ul>
        </Container>
    );
}