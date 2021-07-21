import React from "react";
import { Container } from "react-bootstrap";

//components
import MovieCard from "./MovieCard";

export default function CardM({data}) {
    if (!data) return <h2 style={{textAlign:"center"}} className="mb-5">Loading...</h2>;
    return (
        <Container className="mb-5 row container-fluid">
            {data.map((e) => (
                <MovieCard key={e.Title} info={e} />
            ))}
        </Container>
    )
}