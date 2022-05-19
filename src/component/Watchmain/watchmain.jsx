import React from "react";
import "../Prof/Profile.css"
import "./watchmain.css"
import Watchleft from "./watchleft/watchleft"
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Watchcenter from "./watchcontent/watchcenter"
const watchmain = () => {
  return (
    <>
      <Container fluid className="watchcent">
        <Navbar />
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={4} md={3} className="widthwatch1">
            <Watchleft />
          </Col>
          <Col xs={8} md={6} className="widthwatch2">
            <Watchcenter />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default watchmain;