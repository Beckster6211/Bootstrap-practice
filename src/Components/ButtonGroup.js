import React from "react"

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ComButtonGroup(){
    return(
        <div>
            <p>Component button group</p>
            <p>Wrap a group of Buttons in a ButtonGroup</p>
            <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
        </div>
    )
}

export default ComButtonGroup