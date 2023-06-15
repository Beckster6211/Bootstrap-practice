import React from "react"

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ComImages(){
    return(
        <div>
            <p>Images component page</p>
            <p>use rounded, roundedCircle and thumbnail props to customize</p>
            <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
    <p>Use fluid to scale image to parent</p>
    <Image src="holder.js/100px250" fluid />
        </div>
    )
}

export default ComImages