import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './style.css';
import StoreHoursDropdown from '../Components/StoreHoursDropdown/StoreHoursDropdown';

const AboutUs = () => {
  return (
    <div>
      <div className='top-container'>
        <div className='common-services-container'>
          <h3 style={{marginBottom: 15}}>Common Services</h3>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className='type-of-cars-container'>
          <h3>Types of Cars We Work On</h3>
        </div>

        <Link to='/services'>Click Here</Link><span> for a complete list of services and cars!</span>
      </div>

      <div className='about-us-container'>
        <h2>About Us</h2>
        <Card style={{ flexDirection: 'row', marginRight: 10, marginLeft: 10 }}>
          <Card.Img className='group-photo' style={{ width: '50%', height: '50%' }} src="groupphoto.jpeg" />
          <Card.Body>
            <Card.Text>
              Best Care Auto is family owned business by two cousins, Tom and Dennis.
            </Card.Text>
            <Card.Text>
              The entire team of auto technicians, Dusty, Nico, and [someone] grew up
              locally in the Garden Grove area and share a passion for cars that began
              in their childhoods. They honed their skills through years of working on cars,
              eventually leading them to pursue careers as mechanics. Each member of the team
              owns multiple cars, including an everyday vehicle as well as a car that they
              work on purely for enjoyment. The team has a particular affinity for
              refurbishing old cars, taking pride in bringing these classic vehicles back
              to their former glory.
            </Card.Text>
            <Card.Text>
              Their expertise, combined with their love for cars,
              makes this mechanic shop the go-to destination for anyone looking for quality
              automotive service.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <h3>Come By and Meet the Team!</h3>
      <div className='store-hours'>
        <div className='store-hours-text'>Store Hours: </div>
        <StoreHoursDropdown />
      </div>
      

      {/* Google Map Location */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1459.7209468581832!2d-117.9318410113622!3d33.759066107165516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd27f38ad98e6b%3A0xc3e6620fa0b73186!2sBest%20Care%20Auto!5e0!3m2!1sen!2sus!4v1682448443090!5m2!1sen!2sus" 
        title='google map location'
        width="80%" 
        height="450px" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade" />

    </div>
  );
}

export default AboutUs;
