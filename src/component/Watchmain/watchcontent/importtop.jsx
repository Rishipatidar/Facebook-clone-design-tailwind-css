import React from "react"
import { Col, Row, Container } from "react-bootstrap";
import Prof from "../../../images/icons/prof.jpg"
import { Link } from "react-router-dom";

const Watchtop = () => {
    return (
        <>
            <Container fluid className="topcontentport">
                <Row>
                <Row className="storport1">
                    <span>New for you &nbsp; &nbsp; 3</span>
                </Row>
                </Row>

                
                <Row className="scroll">
                <Link className="rightportcont">
                <Row className="storport2">
                    <Col className="storeimg"><img src={Prof} alt="" srcset="" className="imgresstor"/></Col>
                    <Col className="storwatchcont">New videos that you might like from OTV and others.                    
                    <Row>
                    <Col className="colorchange">4 days ago</Col>
                    </Row>
                    </Col>
                </Row>
                </Link>
                
                <Link className="rightportcont">
                <Row className="storport2">
                    <Col><img src={Prof} alt="" srcset="" className="imgresstor"/></Col>
                    <Col className="storwatchcont">New videos that you might like from OTV and others.                    
                    <Row>
                    <Col className="colorchange">4 days ago</Col>
                    </Row>
                    </Col>
                </Row>
                </Link>
                
                <Link className="rightportcont">
                <Row className="storport2">
                    <Col><img src={Prof} alt="" srcset="" className="imgresstor"/></Col>
                    <Col className="storwatchcont">New videos that you might like from OTV and others.                    
                    <Row>
                    <Col className="colorchange">4 days ago</Col>
                    </Row>
                    </Col>
                </Row>
                </Link>
                    </Row>
            </Container>


        </>

    )

}

export default Watchtop;