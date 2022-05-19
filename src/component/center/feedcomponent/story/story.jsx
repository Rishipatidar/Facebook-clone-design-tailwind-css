import React from "react";
import "./story.css"
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import prof from "../../../../images/icons/prof.jpg"

const Story=()=>{

 const card = <div className="firstcard">
 <div>
 <img src={prof} alt="" srcset="" className="mainimage"/>
 </div>
 <div className="profilecircle">
 <img src={prof} alt="" srcset="" className="imgrescard"/>
 </div>
 <div className="name">
     <p>Rishi Patidar</p>
 </div>

</div>
  

    return(
        <>
        <Container fluid className="storycard">
  {/* <Row> */}
    <div sm className="cardarrange">
       
        
          {card}{card}
          {card}{card}{card}

    </div>

  {/* </Row> */}
</Container>


        </>
    )
}

export default Story;