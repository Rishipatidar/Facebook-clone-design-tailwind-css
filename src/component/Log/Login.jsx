import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import facebookname from "../../images/facebookname.svg"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'
import "./login.css"
const Login=()=>{

  return(
    <>
    <Container fluid className='conthei'>
  <Row >
    <Col className='firstpage1'><img src={facebookname} alt="" srcset="" className='firstpageimg'/>
    <p className='firstpagetagl'>Facebook helps you connect and share with the people in your life.
</p>
    </Col>
    <Col className='firstpage2'>

    <Form className='manageformde'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" >
    Link
    {/* <Link to="/Profile">
    Login
    </Link> */}
  </Button>
  <div className='createnewacc'>
  <Button variant="primary" type="submit">
    Create New Account 
  </Button>
  </div>
</Form>
    </Col>
  </Row>
</Container>

    </>
  )
}
export default Login;