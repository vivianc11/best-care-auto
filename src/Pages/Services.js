import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = () => {
  return (
    <div>
      <h1 className='title'>Services</h1>
    
    <Container>
    <Row>
        <Col>
          <h3>General Services</h3>
          <p>Factory Scheduled Maintenance 30k/60k/90k<br/>
            Starter Repair/Replacement<br/>
            Tune Ups<br/>
            Belt & Hose Replacements<br/>
            Trip Inspections<br/>
            Electric System Diagnosis & Repair<br/>
            New & Rebuilt Transmissions<br/>
            Pre-Purchase Inspections<br/>
            Fleet Services<br/>
            AC Recharge and Heater Repair<br/>
            Suspension<br/>
            CALL US FOR MORE INFO</p>
        </Col>
      </Row>

      <br/><br/>

      <Row>
        <Col sm={4}>
          <h4>Diagnosis</h4>
          <p>Weird sounds? Did that light on your dashboard come on? Don't worry, we're here to diagnose and recommend treatment.<br/>
          Our professional techs are here to make sure you feel safe and secure when you're behind the wheel.</p>
        </Col>

        <Col sm>
          <h4>Oil Change</h4>
          <p>Oil keeps the engine running smoothly. You should have it changed around every 5,000 miles or 6 months.</p>
        </Col>
        
        <Col sm>
          <h4>Brake Service</h4>
          <p>Your brakes should be inspected and maintained to ensure your family and your safety on the road.</p>
        </Col>
      </Row>

      <br/><br/>

      <Row>
        <Col sm>
          <h4>Tire Repair, Rotation</h4>
          <p>Words words words words</p>
        </Col>
        <Col sm>
          <h4>Laser Alignment</h4>
          <p>Words words words words</p>
        </Col>
        <Col sm>
          <h4>Engine/Transmission Rebuild or Swap</h4>
          <p>Words words words words</p>
        </Col>
      </Row>

      <br/><br/>
    </Container>

    </div>
  );
}

export default Services;
