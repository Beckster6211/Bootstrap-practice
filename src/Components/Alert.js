import React, {useState} from "react"

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

// alerts in eight variants
// alerts can have links, they will matching colour
// alerts can contain whatever, header, paragraphs, dividers
// add dismissable prop to addd dismiss button to an alert

function ComAlert(){

    const [show, setShow] = useState(true)

return(
    <div>
        <p>Alert component page</p>
        <p>helpful for feedback messasges with user actions</p>
        {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      <p>colour is sometimes not helpful to people with screen readers</p>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
      <p>alerts can contain whatever, header, paragraphs, dividers</p>
      <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
    <p>add dismissable prop to addd dismiss button to an alert</p>
    {show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert> :  <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </div>
)
}

export default ComAlert