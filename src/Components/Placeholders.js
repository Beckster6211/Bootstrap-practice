import React from "react"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function ComPlaceholders(){
    return(
        <div>
            <p>Placeholder component page</p>
            <p>Using placeholders for components or pages indictates something may be loading</p>
            <p>Can be used to enhance user experience. built HTML and CSS no JS. will need custom JS to toggle visibility, appearance, color and sizing customized with utility classes.</p>
            <p>Example a loading card</p>
            <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
    <p>Placeholder component and grid column prop (xs={6}) to set width, can replace text inside element ot be added to existing component via as prop. Styling is applied to PlaceholdreButon via ::before to ensure height.</p>
    <p aria-hidden="true">
        <Placeholder xs={6} />
      </p>

      <Placeholder.Button xs={4} aria-hidden="true" />
      <p>Can change width through grid column classes, width utilies or inline styles</p>
      <Placeholder xs={6} />
      <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
      <p>Color, by default Placeholder uses currentColor, can be overridden with custom color or utility class</p>
      <Placeholder xs={12} />

      <Placeholder xs={12} bg="primary" />
      <Placeholder xs={12} bg="secondary" />
      <Placeholder xs={12} bg="success" />
      <Placeholder xs={12} bg="danger" />
      <Placeholder xs={12} bg="warning" />
      <Placeholder xs={12} bg="info" />
      <Placeholder xs={12} bg="light" />
      <Placeholder xs={12} bg="dark" />
      <p>Sizing, size of placeholder are based on sizing props lg, sm, xs</p>
      <Placeholder xs={12} size="lg" />
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm" />
      <Placeholder xs={12} size="xs" />
      <p>Animation placeholders set prop animation to glow or wave</p>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
        </div>
    )
}

export default ComPlaceholders