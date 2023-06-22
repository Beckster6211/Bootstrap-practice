import React from "react"

import Form from 'react-bootstrap/Form';

function ComFormText(){
    return(
        <div>
            <p>Form Text page</p>
            <p>Create block-level or inline-level text form</p>
            <p>Block-level help text in forms created using Form.Text. Inline help text can be flexibly implemented using inline HTML element and utility classes .text-muted</p>
            <p>Form text below inputs can be styled with Form.Text, this component included display:block and adds some top margin for easy spacing from inputs above</p>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                />
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text>
        </div>
    )
}

export default ComFormText