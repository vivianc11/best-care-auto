import React from 'react';
import Card from 'react-bootstrap/Card';
import  './style.css';

const Services = () => {
  return (
    <div>
      <h1 className='title'>Services</h1>
      <hr class="hr hr-blurry" />
      <div className='top-container'>
      <div className='services-cards'>
      <Card border="dark" style={{ width: '25rem' }}>
              <Card.Header>General Services</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Factory Scheduled Maintenance 30k/60k/90k</li>
                  <li>Starter Repair/Replacement</li>
                  <li>Tune Ups</li>
                  <li>Belt & Hose Replacements</li>
                  <li>Trip Inspections</li>
                  <li>Electric System Diagnosis & Repair</li>
                  <li>New & Rebuilt Transmissions</li>
                  <li>Pre-Purchase Inspections</li>
                  <li>Fleet Services</li>
                  <li>AC Recharge and Heater Repair</li>
                  <li>Suspension</li>
                  <li>CALL US FOR MORE INFO</li>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '25rem' }}>
              <Card.Header>Diagnosis</Card.Header>
              <Card.Body>
                <Card.Title>Weird sounds? Did that light on your dashboard come on?</Card.Title>
                <Card.Text>
                  Don't worry, we're here to diagnose and recommend treatment<br/><br/>
                  Our professional techs are here to make sure you feel safe and secure when you're behind the wheel
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '25rem' }}>
              <Card.Header>Oil Change</Card.Header>
              <Card.Body>
                <Card.Title>Oil keeps the engine running smoothly</Card.Title>
                <Card.Text>
                  You should have it changed around every 5,000 miles or 6 months
                </Card.Text>
              </Card.Body>
            </Card>
            <div class="break"></div>
            <Card border="dark" style={{ width: '25rem' }}>
              <Card.Header>Brake Service</Card.Header>
              <Card.Body>
                <Card.Title>Come to a complete stop!</Card.Title>
                <Card.Text>
                  Your brakes should be inspected and maintained to ensure your family and your safety on the road
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '25rem' }}>
              <Card.Header>Tire Repair, Rotation</Card.Header>
              <Card.Body>
                <Card.Title>Rotate</Card.Title>
                <Card.Text>
                Words words words words
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '25rem' }}>
              <Card.Header>Laser Alignment</Card.Header>
              <Card.Body>
                <Card.Title>Align</Card.Title>
                <Card.Text>
                Words words words words
                </Card.Text>
              </Card.Body>
            </Card>
            <div class="break"></div>
            <div class="break"></div>
            <div class="break"></div>
            <div class="break"></div>

          <h1 className='title'>Cars We Service</h1>

          <div class="break"></div>
          <img alt='Compliation of car logos' className='car-logos' src='CarBrands.png'></img>

      </div>
    </div>

    </div>
  );
}

export default Services;
