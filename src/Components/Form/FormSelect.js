import React from "react"

import Form from 'react-bootstrap/Form';

function ComFormSelect(){
    return(
        <div>
            <p>Form Select page</p>
            <p>Select element</p>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <p>Sizing, choose small or large</p>
            <Form.Select size="lg">
        <option>Large select</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      <br />
      <Form.Select size="sm">
        <option>Small select</option>
      </Form.Select>
        </div>
    )
}

export default ComFormSelect