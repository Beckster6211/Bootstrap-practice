import React, {useState, useRef, useEffect} from "react"

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image';
import Popover from 'react-bootstrap/Popover';

function ComOverlays(){

    const [show, setShow] = useState(false);
    const [newTarget, setNewTarget] = useState(null);
    const target = useRef(null);
    const ref = useRef(null)

        const renderTooltip = (props) => (
          <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
          </Tooltip>
        );

        const Link = ({ id, children, title }) => (
            <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
              <a href="#">{children}</a>
            </OverlayTrigger>
        )

        const popover = (
            <Popover id="popover-basic">
              <Popover.Header as="h3">Popover right</Popover.Header>
              <Popover.Body>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
              </Popover.Body>
            </Popover>
          );
          
          const handleClick = (event) => {
            setShow(!show);
            setNewTarget(event.target);
          };

    return(
        <div>
            <p>Overlays component page</p>
            <p>set of components for positioning beautiful overlays, tooltips, popovers</p>
            <p>overlays rely on thrid party library, popper.js. Tooltip and Popover components do not positon themselves, Overlay and OverlayTrigger inject ref and style. Tooltip expects specific props injected by Overlay. Tooltips for disabled elements must be triggeredd on a wrapper element</p>
            <p>Overlay for positioning and controlling tooltip visibility (its a wrapper around popper.js adds support for transitions)</p>
            <p>Overlays consist of the overlay - the element to be positioned, and target- the element the overlay positioned in relation to. Optionally can also have an arrow element like the tooltips and popovers</p>
            <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
      <p>OverlayTrigger component help common use cases, can delay showing/hiding and a few different triggers. Triggering components must accepts a ref since OverlayTrigger will attempt to add one, can use forwardRef() for function</p>
      <p>example  shows how position the overlay to different element than one that triggers its visibility</p>
      <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
            <p>advanced behaviours OverlayTrigger accepts function child passes injected ref and event handlers that correspond to configured trigger prop. Can manually apply props to any element you want or split them</p>
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image
            ref={ref}
            roundedCircle
            src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
          />
          <span className="ms-1">Hover to see</span>
        </Button>
      )}
    </OverlayTrigger>
    <p>Tooltip, more stylish alternative to anchor title attribute</p>
    <p>example hover over links</p>
    <p>
      Tight pants next level keffiyeh{' '}
      <Link title="Default title" id="t-1">
        you probably
      </Link>{' '}
      haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable
      quinoa 8-bit american apparel{' '}
      <Link id="t-2" title="Another one">
        have a
      </Link>{' '}
      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
      thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
      cleanse vegan chambray. A really ironic artisan{' '}
      <Link title="Another one here too" id="t-3">
        whatever keytar
      </Link>
      , scenester farm-to-table banksy Austin{' '}
      <Link title="The last tip!" id="t-4">
        twitter handle
      </Link>{' '}
      freegan cred raw denim single-origin coffee viral.
    </p>
    <p>Can pass Overlay injected props directly to the Tooltip component</p>
    <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
      <p>Or pass Tooltip element to OverlayTrigger</p>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}
      <p>Popovers, found in iOS</p>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
  <p>Can control placement of Popover</p>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
      ))}
      <p>Disabled attribute arent interactive, users cannot hover or click them to trigger a popover(or tooltip). workaround trigger the overlay from wrapper div or span and override the pointer-events on the disabled element</p>
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
      <span className="d-inline-block">
        <Button disabled style={{ pointerEvents: 'none' }}>
          Disabled button
        </Button>
      </span>
    </OverlayTrigger>
    <p>Can specify a container to control the DOM element the overlay is appended to. useful when using styles tht conflict with Overlays</p>
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Popover bottom</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
    <p>Updating position dynamically, manual action to update position of an Overlay in response to change. Overlay component injects a popper prop with scheduleUpdate() method an overlay component can use to reposition itself</p>

        </div>
    )
}

export default ComOverlays


// const UpdatingPopover = React.forwardRef(
//     ({ popper, children, show: _, ...props }, ref) => {
//       useEffect(() => {
//         console.log('updating!');
//         popper.scheduleUpdate();
//       }, [children, popper]);
  
//       return (
//         <Popover ref={ref} body {...props}>
//           {children}
//         </Popover>
//       );
//     },
//   );
  
//   const longContent = `
//     Very long
//     Multiline content
//     that is engaging and what-not
//   `;
//   const shortContent = 'Short and sweet!';
  
//   function Example() {
//     const [content, setContent] = useState(shortContent);
  
//     useEffect(() => {
//       const timerId = setInterval(() => {
//         setContent(content === shortContent ? longContent : shortContent);
//       }, 3000);
  
//       return () => clearInterval(timerId);
//     });
  
//     return (
//       <OverlayTrigger
//         trigger="click"
//         overlay={
//           <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
//         }
//       >
//         <Button>Holy guacamole!</Button>
//       </OverlayTrigger>
//     );
//   }
  
//   render(<Example />);