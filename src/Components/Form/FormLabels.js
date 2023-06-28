import React from "react";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ComFormLabel(){
    return(
        <div>
            <p>Form Labels</p>
            <p>Labels, float over input fields</p>
            <p>Wrap Form.Control in FloatingLabel enable floating labels. placeholder required on each Form.Control use :placeholder-shown</p>
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <p>Textareas, By default textareas same height as input, set custom heights on textarea (do not use rows attribute, set height an explicit height, either inline or css)</p>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <p>Selects, Form.Control, floating labels avaliable on Form.Selects (unlike inputs show label in floated state)</p>
      <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
    <p>Layout, Bootstrap grid system (place form elements inside column classes)</p>
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Works with selects"
        >
          <Form.Select aria-label="Floating label select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
    <p>Customizing rendering, control of rendering, use FormFloating to wrap input and label, Form.Control come first to utilize sibling selector</p>
    <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
        </div>
    )
}

export default ComFormLabel