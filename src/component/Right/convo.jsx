import React from "react"
import Searchclient from "../../images/icons/searchcl.png"
import Livevideo from "../../images/icons/livevideo.png"
import Dot from "../../images/icons/dot.png"
import { Container, Row, Col } from "react-bootstrap"
import Chatprofile from "./chatlist";
import Chatimport from "./chatimport"

const Chat = (props) => {
    return (
        <>
            <Container className="chatportion">
                <Row className="chathead">
                    <Col>Contacts</Col>
                    <Col xs lg="2"><img src={Livevideo} alt="" srcset="" className="chaticonres"/></Col>
                    <Col xs lg="2"><img src={Searchclient} alt="" srcset="" className="chaticonres"/></Col>
                    <Col xs lg="2"><img src={Dot} alt="" srcset="" className="chaticonres"/></Col>
                </Row>
                {Chatprofile.map((data,index)=>{
                    return(<Chatimport
                    imgo={data.imgo}
                    name={data.name}
                    />)
                })}               
            </Container>

        </>
    )
}

export default Chat;