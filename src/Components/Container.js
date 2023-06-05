import React from "react"

import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

// fluid for width 100% across

// border on all sides 
// border border-"color" no speech marks
// border border-"number" no speech marks
// radius rounds corners rounded

function ComContainer(){
    return (
        <div className="m-2 p-2 border border-dark border-2 rounded text-center">
            <Container fluid className="bg-primary p-1 rounded">
                <Card className=" m-1 bg-danger border border-dark border-2 rounded text-light">
                    <p>Hi Card component inside Container component</p>
                </Card>
            </Container>
            <br/>
            <Container className="bg-primary-subtle">
                <p>hi</p>
            </Container>
            <Container className="bg-secondary">
                <p>hi</p>
            </Container>
            <Container fluid className="bg-success">
                <p>hi</p>
            </Container>
            <Container fluid className="bg-warning">
                <p>hi</p>
            </Container>
            <Container fluid className="bg-info">
                <p>hi</p>
            </Container>
            <Container fluid className="bg-light">
                <p>hi</p>
            </Container>
        </div>
    )
}

export default ComContainer;