import React,{useState} from "react";
import { Link } from "react-router-dom";
import Chat from "./convo";
import Birthday from "../../images/icons/birthday.png"
import Close from "../../images/icons/close.png"
import Miuig from "../../images/banner/miuig.jpg"
import Groups from "../../images/icons/groups.png"
import {Row,Container,Col} from "react-bootstrap"
import "./Rightbar.css"

const RightBar = () => {
    const bdayshow = false;
    const [bdayshowbtn,setbdayshowbtn]=useState(bdayshow);
    const bdayhide=()=>{         
      var bday = document.querySelector('.birthday');

      if(bdayshowbtn===false)
      {
        bday.style.display='none';
        setbdayshowbtn(true);
      }
      else{
        bday.style.display ="grid";
        setbdayshowbtn(false);
      }
    }


    const gorupshow = false;
    const [groupshowbtn,setgroupshowbtn]=useState(gorupshow);
    const goruphide=()=>{         
      var Groupsfun = document.querySelector('.Groups');

      if(groupshowbtn===false)
      {
        Groupsfun.style.display='none';
        setgroupshowbtn(true);
      }
      else{
        Groupsfun.style.display ="grid";
        setgroupshowbtn(false);
      }
    }
  



    return (
        <>
            <Container>
                <Row className="birthday" >
                    <Link className="linkbday">
                    <Col><img src={Birthday} alt=""  className="bdayimg"/></Col>
                    <Col><p className="notificationline">Rishi Parashar and 6 others have their birthdays today.</p></Col>
                    </Link>
                    <Col><img src={Close} alt="" className="closebday" onClick={bdayhide}/></Col>
                </Row>

                <Row className="Groups" >
                    <Link className="grouplink">
                    <Col className="groupheaport">
                        <img src={Groups} alt="" srcset=""  className="grpiconright"/>
                        <p className="aligntextgrp aligntextgrp1">Groups</p>
                        <p className="aligntextgrp aligntextgrp2">-Suggested for you</p>
                        <img src={Close} alt="" className="closegrp" onClick={goruphide}/>
                    </Col>
                    <Col>
                    <img src={Miuig} alt="" srcset="" className="grpbanner" />
                        <p className="aligntextgrp aligntextgrp1">MIUI 12.5 & MIUI 12 Global Community</p>
                        <p className="aligntextgrp grptextalig">28k members -10 posts a week</p>
                    </Col>
                    <Col>
                    <Link className="joingrp">
                        <p className="texteditgrp">Join Group</p>
                    </Link>
                    </Col>
                    </Link>
                </Row>
                <Col className="borderchat"></Col>

                <Chat/>

            </Container>
        </>
    )
}
export default RightBar;