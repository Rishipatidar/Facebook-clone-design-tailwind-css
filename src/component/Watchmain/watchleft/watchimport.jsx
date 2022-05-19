import React from "react"
import { Col, Row ,Container} from "react-bootstrap";
import "../watchmain.css"

const Watchimport = (props) => {
    return (
        <>
            <Container className="watchport">
                <Row className="watchprofport">
                    <Col xs lg="2"><img src={props.imgo} alt="" srcset="" className="watchiconres"/></Col>
                    <Col>{props.name}</Col>
                </Row>
                        
            </Container>

        </>
    )
}

export default Watchimport;