import Container from 'react-bootstrap/Container'
import {Col} from "react-bootstrap"
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Friends from "../../images/icons/friends.png"
import Groups from "../../images/icons/groups.png"
import Marketplace from "../../images/icons/marketplace.png"
import Pages from "../../images/icons/pages.png"
import Saved from "../../images/icons/saved.png"
import Watch from "../../images/icons/watch.png"
import Events from "../../images/icons/events.png"
import Jobs from "../../images/icons/jobs.png"
import Memories from "../../images/icons/memories.png"
import Prof from "../../images/icons/prof.jpg"
import "./Leftbar.css"

const Leftbar=()=>{
    return(
        <>
  <div className='leftbarscroll'>
  <Navbar className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Prof}
          width="30"
          height="30"
          className="d-inline-block align-top profdes"
        />{' '}
      Rishi Patidar
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="Friends"
          src={Friends}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Friends
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Groups}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Groups
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Marketplace}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Marketplace
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Watch}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Watch
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="Memories"
          src={Memories}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Memories
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Saved}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Saved
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Pages}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Pages
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Events}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Events
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Jobs}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Jobs
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}

  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
      <svg viewBox="0 0 16 16" color='white' width="1em" height="1em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>{' '}
      More
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}
  <Col className="borderchat"></Col>
  <Navbar.Brand className='hovermenutext'>Your shortcuts</Navbar.Brand>
  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Prof}
          width="30"
          height="30"
          className="d-inline-block align-top profdes"
        />{' '}
      Rishi Patidar
      </Navbar.Brand>
    </Container>
  </Navbar>
  <Navbar.Brand className='hovermenutext'>Your shortcuts</Navbar.Brand>
  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Prof}
          width="30"
          height="30"
          className="d-inline-block align-top profdes"
        />{' '}
      Rishi Patidar
      </Navbar.Brand>
    </Container>
  </Navbar>
  <Navbar.Brand className='hovermenutext'>Your shortcuts</Navbar.Brand>
  <Navbar bg="light" className='hovermenu'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Prof}
          width="30"
          height="30"
          className="d-inline-block align-top profdes"
        />{' '}
      Rishi Patidar
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* <br /> */}
  </div>
        </>
    )
}

export default Leftbar;