import React from "react"
import "./Room.css"
import {OverlayTrigger,Tooltip} from 'react-bootstrap'
import {Container,Col,Row} from 'react-bootstrap';
import Logsys from "../../../../images/icons/live.png"
import prof from "../../../../images/icons/prof.jpg"

const Room=()=>{
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Rishi Patidar
    </Tooltip>
  );
  
 
    return(
        <>
        <Container className="createroomport">
 
  <Row className="rowport">
    <Col xs lg="3">
      <div className="roomport">
          <img src={Logsys} alt="" srcset="" className="livesymres"/>
          <p className="textcreate">Create Room</p>
      </div>
    </Col>
    <Col>
    <div className="invitefriends">
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <img src={prof} alt="" srcset="" variant="success"/>
       
    </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <img src={prof} alt="" srcset="" variant="success"/>
       
    </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <img src={prof} alt="" srcset="" variant="success"/>
       
    </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <img src={prof} alt="" srcset="" variant="success"/>
       
    </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <img src={prof} alt="" srcset="" variant="success"/>
       
    </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <img src={prof} alt="" srcset="" variant="success"/>
       
    </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <img src={prof} alt="" srcset="" variant="success"/>
       
    </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <img src={prof} alt="" srcset="" variant="success"/>
       
    </OverlayTrigger>,
        {/* <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" />
        <img src={prof} alt="" srcset="" /> */}
    </div>
    </Col>
  </Row>
</Container>
        </>
    )
}

export default Room;