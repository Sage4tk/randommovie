import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";

import CardM from "./CardM";

export default function Landing() {
    //card data
    const [data, setData] = useState(null);
    //get input data
    const [inputText, setInputText] = useState({
        number: "1"
    });

    //form handler
    const formHandler = (e) => {
        e.preventDefault();
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
    }

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

    //button generator function
    const generateMovie = (e) => {
        e.preventDefault();
        const changeInput = parseInt(inputText.number);
        console.log(changeInput)
    }

    //fetch data
    useEffect(() => {
        fetchMovie(3);
    },[]);



    return (
        <Container className="mt-5 p-5">
            <h1 style={{textAlign:"center"}} className="mb-5" >Generate a random movie!</h1>
            <CardM data={data} />
            <Form className="border p-4 row align-items-center" onSubmit={generateMovie}>
                <Form.Group className="mb-3">
                    <Form.Label>How many movies?</Form.Label>
                    <Form.Control type="number" name="number" min="1" max="5" defaultValue="1" onChange={formHandler}></Form.Control>
                </Form.Group>
                <Button type="submit" className="btn-warning mx-auto" style={{width:"10rem"}}>Generate a movie</Button>
            </Form>       
        </Container>
    )
}