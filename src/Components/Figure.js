import React from "react"

import Figure from 'react-bootstrap/Figure';

function ComFigure(){
    return(
        <div>
            <p>Figure Component</p>
            <p>Dislpaying images with relevant text</p>
            <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
        </div>
    )
}

export default ComFigure