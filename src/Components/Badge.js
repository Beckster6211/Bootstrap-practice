import React from "react"

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


// good as labelling component
// match the size of the parent element font sizing and em units

function ComBadge(){
    return(
        <div>
            <p>Badge component page</p>
            <p> Good for labelling component</p>
            <p>match the size of the parent element font sizing and em units</p>
            <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>
<p>can be used as part of links or buttons to provide a counter (like for unread notifications), can be confusing for screen readers</p>
<Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
        <p> Can change the variation</p>
        <Badge bg="primary">Primary</Badge>{' '}
      <Badge bg="secondary">Secondary</Badge>{' '}
      <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '}
      <Badge bg="warning" text="dark">
        Warning
      </Badge>{' '}
      <p>use Pill modifier makes badges rounder (larger border-radius)</p>
      <Badge pill bg="info">
        Info
      </Badge>{' '}
      <Badge pill bg="light" text="dark">
        Light
      </Badge>{' '}
      <Badge pill bg="dark">
        Dark
      </Badge>
        </div>
    )

}

export default ComBadge