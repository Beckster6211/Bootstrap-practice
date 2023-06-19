import React from "react"

import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function ComSpinner(){
    return(
        <div>
            <p>Spinner component page</p>
            <p>Spinners can be used to show loading state in projects</p>
            <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <p>Bootstrap offerss 2 animation types, animation prop always be provided with either border or grow</p>
    <Spinner animation="border" />
    &nbsp;
    <Spinner animation="grow" />
    <p>Standard visual variant available both animation styles, set variant property, can be custom sized with style property</p>
    <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
      <p>Sizing, a smaller size is available size properrty to sm</p>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
      <p>Can be used with buttons. recommended change element to span bu configuring the as property using spinner insided buttons</p>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      <p>Recommended provide a ARIA role prop and include screenreader-only readable text of the spinners meaning inside component using visually-hidden</p>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </div>
    )
}

export default ComSpinner