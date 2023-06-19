import React from "react"

import ProgressBar from "react-bootstrap/ProgressBar"

function ComProgressBar(){

    const now = 40

    return(
        <div>
            <p>Progress Bar Page</p>
            <p>Provide up to date feedback on progress of workflow or action</p>
            <p>Default</p>
            <ProgressBar now={60}/>
            <p>Label, add label prop to show the percentage (for low percentages consider adding a min-width to ensure labels text visible)</p>
            <ProgressBar now={now}  label = {`${now}%`}/>
            <p>Screenreader only label, add visuallyHidden prop to hide label visibility</p>
            <ProgressBar now={now} label = {`${now}%`} visuallyHidden />
            <p>Progross bars use the same button and alert classes for styling</p>
            <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
      <p>Striped, uses a gradient to create striped effect</p>
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar striped variant="info" now={20} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={80} />
      <p>Animated, add animated prop to animate stripes right to left</p>
      <ProgressBar animated now={50} />
      <p>Stacked, nest progress bars to tack them</p>
      <ProgressBar>
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>
        </div>
    )

}

export default ComProgressBar