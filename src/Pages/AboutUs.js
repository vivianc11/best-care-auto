import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <div className='top-container'>
        <div className='common-services-container'>
          <h3>Common Services</h3>

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

      {/* Google Map Location */}

      {/* Social Media Links */}

    </div>
  );
}

export default AboutUs;
