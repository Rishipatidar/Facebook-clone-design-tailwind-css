import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import "./Profile.css"
import Leftbar from "../left/Leftbar"
import RightBar from "../Right/RightBar"
import Center from "../center/Center"
import Navbar from "../navbar/Navbar"
import "./Profile.css"
const Profile=()=>{
return(
    <>
    <Container fluid className="profilecont">
    <Navbar/>
  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={6} md={3}>
    <Leftbar/>
    </Col>
    <Col xs={6} md={6}>
      <Center/>
    </Col>
    <Col xs={6} md={3}>
      <RightBar/>
    </Col>
  </Row>


 
</Container>
    </>
)
}

export default Profile;