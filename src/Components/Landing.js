import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";

import CardM from "./CardM";

export default function Landing() {
    //card data
    const [data, setData] = useState(null);
    //get input data
    const [inputText, setInputText] = useState()
    

    const fetchMovie = async (num) => {
        let url = "http://localhost:4000/api/random_movie";

        //queries more than 1 movie default is 1
        if (num) {
            url = url + `?number=${num}`
        }
        
        try {
            const res = await fetch(url)
            const movie = await res.json();
            setData(movie);
        } catch (err) {
            console.log(err)
        }
    }

    //fetch data
    useEffect(() => {
        fetchMovie(5);
    },[])



    return (
        <Container className="mt-5 p-5">
            <h1 style={{textAlign:"center"}} className="mb-5" >Generate a random movie!</h1>
            <CardM data={data} />
            <Form className="border p-4 row align-items-center">
                <Form.Group className="mb-3">
                    <Form.Label>How many movies?</Form.Label>
                    <Form.Control type="number" min="1" max="5" defaultValue="1"></Form.Control>
                </Form.Group>
                <Button className="btn-warning mx-auto" style={{width:"10rem"}}>Generate a movie</Button>
            </Form>       
        </Container>
    )
}