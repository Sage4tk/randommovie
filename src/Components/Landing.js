import React from "react";
import { Container, Button, Form } from "react-bootstrap";

export default function Landing() {
    
    return (
        <Container className="mt-5">
            <h1 style={{textAlign:"center"}} className="mb-5" >Generate a randon movie!</h1>
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