import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Nav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Random Movie Generator</Navbar.Brand>
            </Container>
        </Navbar>
    )
}