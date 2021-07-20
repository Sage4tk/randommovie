import React from "react";
import { Container } from "react-bootstrap";

export default function CardM({data}) {
    if (!data) return (null);
    return (
        <Container>
            <h1>CARD</h1>
        </Container>
    )
}