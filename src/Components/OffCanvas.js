import React, {useState} from "react"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Alert from 'react-bootstrap/Alert';

function ComOffCanvas(){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   function OffCanvasExample({ name, ...props }) {
//     const [show, setShow] = useState(false);

// const options = [
//     {
//       name: 'Enable backdrop (default)',
//       scroll: false,
//       backdrop: true,
//     },
//     {
//       name: 'Disable backdrop',
//       scroll: false,
//       backdrop: false,
//     },
//     {
//       name: 'Enable body scrolling',
//       scroll: true,
//       backdrop: false,
//     },
//     {
//       name: 'Enable both scrolling & backdrop',
//       scroll: true,
//       backdrop: true,
//     },
//   ];

// function OffCanvasExample({ name, ...props }) {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const toggleShow = () => setShow((s) => !s);

    return(
        <div>
            <p>OffCanvas component page</p>
            <p>Build hidden sidebars into projects for navigation, shopping carts and more</p>
            <p>Offcanvas includes header with close button and optional body for padding. Include offcanvas headers with dismiss action</p>
            <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      <p>Responsive offcanvas, hide content outside viewpoint from below a breakpoint, above breakpoint contents behave as usual</p>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      <p>Placement, start places offcanvas on left of viewpoint, end places off canvas on right, top places offcanvas at top, bottom places offcanvas on bottom</p>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))} */}
      <p>Backdrop, scrolling the body is disabled when offcanvas and its backdrop are visible. use scroll prop to toggle body scroll and backdrop prop to toggle backdrop</p>
      {/* <Button variant="primary" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))} */}
      <p>When backdrop set to static offcanvas will not close when clicking outside it</p>
      <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}

export default ComOffCanvas