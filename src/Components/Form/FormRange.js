import React from "react"

import Form from 'react-bootstrap/Form';

function ComFormRange(){
    return(
        <div>
            <p>Form Range</p>
            <p>Custom input type="range" controls with FormRange, track (background) and thumb (value) both styled the same</p>
            <Form.Label>Range</Form.Label>
            <Form.Range />
        </div>
    )
}

export default ComFormRange