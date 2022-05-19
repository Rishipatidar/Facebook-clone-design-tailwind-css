import React from "react"
import Watchtop from "../watchcontent/importtop"
import { Row, Col, Container } from "react-bootstrap"
import "./watchcenter.css"
const Watchcenter = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>

                        <Watchtop />

                    </Col>
                    <Col>

                       

                    </Col>
                </Row>
            </Container>
            <h1>hello</h1>
        </>

    )

}

export default Watchcenter;