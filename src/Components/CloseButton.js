import React from "react"

import CloseButton from 'react-bootstrap/CloseButton';


function ComCloseButton(){
    return(
        <div>
            <p>Close Button component</p>
            <p>generic close button for modal and alerts</p>
            <CloseButton/>
            <p>can add relevant styling to a disbaled close button to prevent user interactions</p>
            <CloseButton disabled/>
            <p>change default to dark color to white with variant="white"</p>
            <div className="bg-dark p-3">
      <CloseButton variant="white" />
      <CloseButton variant="white" disabled />
    </div>
    <p>to ensure maximum accessibility for CloseButton components recommended provide text for screen readers.</p>
    <CloseButton aria-label="Hide" />
        </div>
    )
}

export default ComCloseButton