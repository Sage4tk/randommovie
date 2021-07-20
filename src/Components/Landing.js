import React, { useState, useEffect } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";

import CardM from "./CardM";

export default function Landing() {
    //card data
    const [data, setData] = useState(null);

    const url = "http://localhost:4000/api/random_movie"

    const fetchMovie = async (num) => {
        let arrayMovie = [];
        for (let i = 0; i < num; i++) {
            try {
                const res = await fetch(url)
                const data = await res.json();
                arrayMovie.push(data);
            } catch (err) {
                console.log(err)
            }
        }
        setData(arrayMovie);
    }

    //fetch data
    useEffect(() => {
        fetchMovie(3);
    },[])

    return (
        <Container className="mt-5 p-5">
            <h1 style={{textAlign:"center"}} className="mb-5" >Generate a random movie!</h1>
            <CardM data={data} />
            <Form className="border p-4 row align-items-center">
                <Form.Group className="mb-3">
                    <Form.Label>How many movies?</Form.Label>
                    <Form.Control type="number" min="1" defaultValue="1"></Form.Control>
                </Form.Group>
                <Button className="btn-warning mx-auto" style={{width:"10rem"}}>Generate a movie</Button>
            </Form>       
        </Container>
    )
}