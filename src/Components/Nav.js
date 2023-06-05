import React from "react"
import Nav from "react-bootstrap/Nav"
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

import NavDropdown from 'react-bootstrap/NavDropdown';



// Nav built with Flexbox as a foundation
//change to vertical stacked with .flex-column
// tabs as a nav variant
// pills a nav variant (not avavlibe when vertical)
// use fill to make nav 100% width but each nav item different size
// want each the same size then use justify


function ComNav(){

    return(
        <div className = "m-2 p-2 bg-light">
            <p>Navs and tabs Component</p>
            <Nav fill className="justify-content-start"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item> 
      </Nav>
      <p className="text-end">justify content end to make the disabled nav appear on the right</p>
      <Nav className="justify-content-end">
      <Nav.Item >
        <Nav.Link  eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      </Nav>
    <p>stacked the nav vertically</p>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    <p>can create a nav with tabs (but not a vertical nav) more in the tab components</p>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      </Nav>
      <p>Pills, alternative to tabs</p>
      <Nav justify variant = "pills" defaultActiveKey="/link-1">
      <Nav.Item>
        <Nav.Link href="/link-1">Option</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <p>can mix and match drop down with nav.item and nav.link to creat drop down nav</p>
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Hello there!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <p>also a navdropdown component avaliable</p>
    <Nav variant="pills" activeKey="1">
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
        </div>
        
    )
}

export default ComNav;