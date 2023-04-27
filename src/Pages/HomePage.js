import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './style.css';
import StoreHoursDropdown from '../Components/StoreHoursDropdown/StoreHoursDropdown';

const HomePage = () => {
  return (
    <div>
      <h2 className='welcome-text'>Welcome to Best Care Auto!</h2>
      <div className='header-desc'>
        GARDEN GROVE MECHANICS WITH COMMITMENT TO QUALITY WORK, INTEGRITY, AND CUSTOMER SATISFACTION
      </div>
      <br/>
      <h3 className='title'>Common Services</h3>
      <div className='top-container'>
        <div className='common-services-container'>

        <hr class="hr hr-blurry" />

          <div className='common-services-cards'>
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header className='fw-bold'>Electrical Diagnosis & Repair</Card.Header>
              <Card.Body>
                <Card.Title>Car not starting? Not running properly?</Card.Title>
                <Card.Text>
                  We are experts in diagnosing and fixing electrical issues so that you feel safe in your car.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header className='fw-bold'>Suspension</Card.Header>
              <Card.Body>
                <Card.Title>Bumpy Rides</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header className='fw-bold'>Alignment</Card.Header>
              <Card.Body>
                <Card.Title>Pulling to away from the center</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header className='fw-bold'>Oil Changes</Card.Header>
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

         <div className="break"></div>
         <div className="break"></div>
         <div className="break"></div>

        <h3 className='title'>We Service All Vehicles</h3>
        <hr class="hr hr-blurry" />
        <p>Specialize in Japanese and German cars</p>
        <div className='type-of-cars-container'>  
          <Card.Img title='Honda logo' src='honda.png' style={{height:"200px", width:"250px"}}></Card.Img>
          <Card.Img title='Audi logo' src='audi.png' style={{height:"200px", width:"250px"}}></Card.Img>
          <Card.Img title='Toyota logo' src='toyota.png' style={{height:"200px", width:"250px"}}></Card.Img>
          <Card.Img title='BMW' src='bmw.png' style={{height:"200px", width:"200px"}}></Card.Img>
          <Card.Img title='Lexus' src='lexus.png' style={{height:"200px", width:"250px"}}></Card.Img>
        </div>

        <Link to='/services'>Click Here</Link><span> for a complete list of services and cars!</span>
      </div>

       <div className="break"></div>
       <div className="break"></div>
       <div className="break"></div>

      <div className='about-us-container'>
        <Card className='about-us-card'>
          <Card.Body>
            <h2 className='title'>About Us</h2>
            <hr class="hr hr-blurry" />
            <Card.Text>
              Best Care Auto is a family-owned business.
            </Card.Text>
            <Card.Text>
              The entire team of auto technicians grew up locally in the Garden Grove area and share a passion for cars that began
              in their childhoods. They honed their skills through years of working on cars as a hobby,
              eventually leading them to pursue careers as certified mechanics. Each member of the team
              owns multiple cars, including an everyday vehicle, as well as a car that they
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

       <div className="break"></div>
       <div className="break"></div>

      <h3 className='title' style={{margin: 0}}>Come By and Meet the Team!</h3>
      <hr class="hr hr-blurry" />
      <div className='store-hours'>
        <div className='store-hours-text'>Store Hours: </div>
        <StoreHoursDropdown />
      </div>
      <div className='store-phone-text' style={{marginBottom: '25px'}}>Phone #: <a className='phone-link' href='tel:+1-714-722-3706'>(714) 722-3706</a> </div>

      <div className="break"></div>
      <div className="break"></div>

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

export default HomePage;
