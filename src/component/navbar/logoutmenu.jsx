import React from "react"
import { Link } from "react-router-dom"
import "./Logoutmenu.css"
import {Col,Row,Container} from "react-bootstrap"
import Prof from "../../images/icons/prof.jpg"
import Dot from "../../images/icons/dot.png"
import Setting from "../../images/icons/setting.png"
import Help from "../../images/icons/help.png"
import Display from "../../images/icons/display.png"
import Logout from "../../images/icons/logout.png"

const Logoutmenu = () => {
    return (
        <>
            <Container className="logoutmain">
                <Link className="firstlogout">
                <Row className="subfirstlogout">
                <Col><img src={Prof} alt="" srcset="" className="firstlogoutimg"/></Col>
                <Col className="firstlog2"><h5>Rishi Patidar</h5>
                <p>See your profile</p>
                </Col>
                </Row>
                </Link>   

                <Col className="borderlog">
                  </Col>
                <Link className="thirdlogout">
                <Row className="subthirdlogout">
                <Col><img src={Dot} alt="" srcset="" className="thirdlogoutimg"/></Col>
                <Col className="third2"><p>Switch Profile</p>
                </Col>
                </Row>
                </Link>   

                <Link className="thirdlogout">
                <Row className="subthirdlogout">
                <Col><img src={Setting} alt="" srcset="" className="thirdlogoutimg"/></Col>
                <Col className="third2"><p>Setting & Privacy</p>
                </Col>
                </Row>
                </Link>   


                <Link className="thirdlogout">
                <Row className="subthirdlogout">
                <Col><img src={Help} alt="" srcset="" className="thirdlogoutimg"/></Col>
                <Col className="third2"><p>Help & support</p>
                </Col>
                </Row>
                </Link>   
               

                <Link className="thirdlogout">
                <Row className="subthirdlogout">
                <Col><img src={Display} alt="" srcset="" className="thirdlogoutimg"/></Col>
                <Col className="third2"><p>Display & accessibilty</p>
                </Col>
                </Row>
                </Link>   


                <Link className="thirdlogout">
                <Row className="subthirdlogout">
                <Col><img src={Logout} alt="" srcset="" className="thirdlogoutimg"/></Col>
                <Col className="third2"><p>Logout</p>
                </Col>
                </Row>
                </Link>   
               
            </Container>
        </>
    )
}

export default Logoutmenu;