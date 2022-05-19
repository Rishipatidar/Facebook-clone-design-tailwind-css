import React from "react";
import "./Center.css"
import Story from "./feedcomponent/story/story";
import Createpost from "./feedcomponent/createpost1/Createpost";
import Room from "./feedcomponent/Room/Room";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Center=()=>{
    return(
      <>
    <div className="scrolleffect">
        <Container fluid="md" className="centrealign">
  <Row className="aligncentreport">
    <Col>
      
        <Story/>
        <Createpost/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
    </Col>
  </Row>
</Container>

    </div>
        </>
    )
}

export default Center;