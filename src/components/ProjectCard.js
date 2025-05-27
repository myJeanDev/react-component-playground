import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProjectCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text</Card.Text>
                <Button variant="secondary" style={{ backgroundColor: "#282c34" }}>Go somewhere</Button>
            </Card.Body>
        </Card >
    );
}

export default ProjectCard;