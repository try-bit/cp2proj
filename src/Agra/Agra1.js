import React from "react";
import { Container, Row, Col,} from "reactstrap";
import AgraCarousel from "./AgraCarousel";

import imgCard6 from "./AgraImage6.jpg"

import Activity from"./Activity_Agra"
const Agra1= () => (
    <div><div classNmae="PageLayout">
      <h1>AGRA</h1>
  <div className="subComponent" >
    <section className="tour-cover item-center">
        <img src={imgCard6} alt="" />
       </section>
    <Container>
      <section>
        <Row sm="8">
          <Col sm="8">
      <AgraCarousel/>
            
          </Col>
          <Col sm="4">
  <h6 align="left"> Welcome to the City of the TAJ!<br/>
              </h6>
             
          </Col>
        </Row>
      </section>
      <br/>
      <div className="Activities"><h1>ACTIVITIES</h1>
      <Activity/>
<br/>
</div>

    </Container>
    
  </div>
  
    </div>
    
    </div>
);

export default Agra1;