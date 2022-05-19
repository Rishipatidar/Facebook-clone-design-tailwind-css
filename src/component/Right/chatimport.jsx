import React from "react";
import { Row, Col } from "react-bootstrap"

const Chatimport = (props) => {
    return (
        <>
            <Row className="chathead">
                <Col xs lg="2"><img src={props.imgo} alt="" srcset="" className="chatprofile" /></Col>
                <Col>{props.name}</Col>
            </Row>
        </>
    )
}
export default Chatimport;