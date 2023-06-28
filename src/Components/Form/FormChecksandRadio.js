import React from "react"

import Form from 'react-bootstrap/Form';

function ComFormCheckandRadio(){
    return(
        <div>
            <p>Form check and radio</p>
            <p>FormCheck provides non-textual checkbox and radio controls, provides single components both types.</p>
            <p>Default (stacked) immediate sibling and will be vertically stacked spaced</p>
            <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
        <p>A switch has markup of custom checkbox use type="switch" to renderr toggle. Switches support customizable children as FormCheck</p>
        <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
      <Form.Check // prettier-ignore
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      />
    </Form>
    <p>Inline, group checkboxes or radio on horizontal row add inline prop</p>
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            disabled
            label="3 (disabled)"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
    <p>Reverse, put checkbox, radio, switches on opposite side with prop reverse</p>
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
            reverse
            label="1"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="2"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
          <Form.Check
            reverse
            disabled
            label="3 (disabled)"
            type={type}
            id={`reverse-${type}-3`}
          />
        </div>
      ))}
    </Form>
        <p>Without Labels, render FormCheck without labels (no children) additional styling applied keep inputs from collapsing. (add aria-label when omitting label)</p>
        <Form.Check aria-label="option 1" />
      <Form.Check type="radio" aria-label="radio 1" />
      <p>Customizing FormCheck, when customizing better to use constituent parts. Provided children to the FormCheck can forgo default rendering and handle yourself. Still provide id to FormCheck or FormGroup</p>
      <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={type} className="mb-3">
          <Form.Check type={type} id={`check-api-${type}`}>
            <Form.Check.Input type={type} isValid />
            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
          </Form.Check>
        </div>
      ))}
    </Form>
        </div>
    )
}

export  default ComFormCheckandRadio