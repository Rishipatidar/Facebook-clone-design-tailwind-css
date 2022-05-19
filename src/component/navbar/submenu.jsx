import React from "react"
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap"

const Submenu=(props)=>{
return(
    <>
    <Link className="nodec" to={props.linko}>
                  <Row className="hovereffect" >
                    <Col xs={12} md={8} className="iconstore" >
                      <Col>
                      <img src={props.navimg} alt="" srcset="" className="iconsresmenu" />
                      </Col>
                    </Col>
                    <Col xs={6} md={4} className="content"> 
                      <Row>
                        <Row className="submenuhead">
                        {props.head}
                        </Row>
                        <Row className="menudes">
                      {props.desc}
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                </Link>
    </>
)
}
const RigSubmenu=(props)=>{
return(
    <>
    <Link className="nodecright" to={props.linko}>
                  <Row className="hovereffect" >
                    <Col xs={12} md={8} className="iconstoreright" >
                      <Col>
                      <img src={props.navimg} alt="" srcset="" className="iconsresrightmenu" />
                      </Col>
                    </Col>
                    <Col xs={6} md={4} className="contentright"> 
                      <Row>
                        <Row className="submenuheadright">
                        {props.head}
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                </Link>
    </>
)
}

export default Submenu;
export {RigSubmenu}