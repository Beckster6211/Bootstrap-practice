import React from "react"

import Breadcrumb from 'react-bootstrap/Breadcrumb';

function ComBreadCrumbs(){
    return (
        <div>
            <p>Breadcrumbs component page</p>
            <p>Breadcrumbs used to show heirarchy of navigaion</p>
            <p>Add active prop to the active Breadcrumb.Item. Do not set both active and href attributes. active overrides href and span element is rendered instead of a.</p>
            <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
        </div>
    )
}

export default ComBreadCrumbs