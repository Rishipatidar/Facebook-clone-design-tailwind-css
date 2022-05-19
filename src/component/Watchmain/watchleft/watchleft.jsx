import React from "react";
import { Link } from "react-router-dom";
import Setting from "../../../images/icons/setting.png"
import Watch from "../../../images/icons/watch.png"
import { Col,Row ,Container} from "react-bootstrap";
import watchvideo from "./watchdata"
import Watchimport from "./watchimport"


const Watchleft=()=>{
    return(
        <>
       <Container className="watchlport">
                    <Row className="watchtophead">
                    <Row className="watchfirst">
                        <Col className="watchhead">Watch</Col>
                        <Col><img src={Setting} alt="" srcset=""  className="watchsetting"/></Col>
                    </Row>
                    <Row className="watchsearch">
                        <input type="text" placeholder="Search Videos"  className="editwatchserch"/>
                    </Row>
                    <Row className="watchsecond">
                        <img src={Watch} alt="" srcset=""  className="watchtopimg"/>
                        <span>Home</span>
                    </Row>
                    <Row className="watchsecond">
                        <img src={Watch} alt="" srcset="" className="watchtopimg" />
                        <span>Live</span>
                    </Row>
                    <Row className="watchsecond">
                        <img src={Watch} alt="" srcset="" className="watchtopimg" />
                        <span>Shows</span>
                    </Row>
                    <Row className="watchsecond">
                        <img src={Watch} alt="" srcset=""  className="watchtopimg"/>
                        <span>Saved videos</span>
                    </Row>
                    
                </Row>
                <Col className="borderbtm"></Col>
                <Row className="lowerheadwatch">
                <Col className="lowerheadwatch1">Your Watchlist</Col>
                <Col className="lowerheadwatch2"><Link className="lowerheadwatchlink"> Manage</Link></Col>
                </Row>
                <Row className="chathead">
                   {watchvideo.map((data,index)=>{
                       return(<Watchimport
                       imgo={data.imgo}
                       name={data.name}
                       
                       />)
                   })}
                </Row>
                        
            </Container>
        
        </>
    )
}
export default Watchleft;