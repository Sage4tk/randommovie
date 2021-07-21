import React from "react";
import { Card } from "react-bootstrap";

export default function MovieCard({info}) {
    return (
        <Card className="col-sm-1 m-auto" style={{width: "20rem"}}>
            <Card.Body>
                <Card.Img variant="top" src={info.Poster}/>
                <Card.Title className="mb-2">{info.Title}</Card.Title>
                <Card.Text>{info.Plot}</Card.Text>
                <Card.Text>Director: {info.Director}</Card.Text>
                <Card.Text>Actors: {info.Actors}</Card.Text>
                <Card.Text>Genre: {info.Genre}</Card.Text>
            </Card.Body>
        </Card>
    )
}