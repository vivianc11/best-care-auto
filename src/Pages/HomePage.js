import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import StoreHoursDropdown from '../Components/StoreHoursDropdown/StoreHoursDropdown';

const HomePage = () => {
  return (
    <div>
      <h2 className='welcome-text'>Welcome to Best Care Auto!</h2>
      <div className='header-desc'>
        <p>GARDEN GROVE MECHANICS WITH COMMITMENT TO QUALITY WORK, INTEGRITY, AND CUSTOMER SATISFACTION</p>
      </div>
      <br/>


      <h3 className='title'>Most Popular Services</h3>
      <div className='top-container'>
        <div className='common-services-container'>

        <hr class="hr hr-blurry" />

          <div className='common-services-cards'>
            <Card className= 'common-service-card' border="dark" style={{ width: '18rem'}}>
              <Card.Header className='fw-bold'>Electrical Diagnosis & Repair</Card.Header>
              <Card.Body>
                <Card.Title>Car not starting? Not running properly?</Card.Title><br />
                <Card.Text>
                  We are experts in diagnosing and fixing electrical issues so that you can rely on your car.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Suspension info link: https://www.jdpower.com/cars/shopping-guides/what-is-the-suspension-in-a-car */}
            <Card className= 'common-service-card' border="dark" style={{ width: '18rem' }}>
              <Card.Header className='fw-bold'>Suspension</Card.Header>
              <Card.Body>
                <Card.Title>Bumpy Rides</Card.Title><br />
                <Card.Text>
                  Ensure peaceful and smooth rides for your family, while also ensuring better handling and durability of your vehicle.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className= 'common-service-card' border="dark" style={{ width: '18rem' }}>
              <Card.Header className='fw-bold'>Laser Alignment</Card.Header>
              <Card.Body>
                <Card.Title>Steering pulling away from the center?</Card.Title><br />
                <Card.Text>
                  Keep your tires in shape, literally, by making sure you get your wheels aligned to ensure even wear and have more precise steering.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className= 'common-service-card' common-border="dark" style={{ width: '18rem' }}>
              <Card.Header className='fw-bold'>Oil Changes</Card.Header>
              <Card.Body>
                <Card.Title>Protect your engine</Card.Title><br />
                <Card.Text>
                  Your engine relies on clean oil to keep its parts moving and working. We recommend oil changes every 5,000 miles for most vehicles.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

         <div className="break"></div>
         <div className="break"></div>

         <a className='click-here-link' href='/services'>Click here for a complete list of services and cars we service!</a>

         <div className="break"></div>
         <div className="break"></div>

        <h3 className='title'>We Service All Vehicles</h3>
        <hr class="hr hr-blurry" />
        <p style={{fontSize: '20px'}}>Specialize in Japanese and German cars</p>
        <div className='type-of-cars-container'>  
          <img className='indy-car-logos' alt='Honda logo' src='honda.png'></img>
          <img className='indy-car-logos' alt='Audi logo' src='audi.png'></img>
          <img className='indy-car-logos' alt='Toyota logo' src='toyota.png'></img>
          <img className='indy-car-logos' alt='BMW logo' src='bmw.png'></img>
          <img className='indy-car-logos' alt='Lexus logo' src='lexus.png'></img>
        </div>

        <div className="break"></div>
        <div className="break"></div>

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
              eventually leading them to pursue careers as certified mechanics. The team has a particular affinity for
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
        <div className='store-hours-text'>Business Hours:</div>
        <StoreHoursDropdown />
      </div>
      <div className='store-phone-text' style={{marginBottom: '25px'}}>Phone #: <a className='phone-link' href='tel:+1-714-722-3706'>(714) 722-3706</a> </div>

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
