import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';

const Services = () => {
  return (
    <div>
      <h1 className='title'>Services</h1>
      <hr class="hr hr-blurry" />
      <div className='top-container'>
        <div className='services-cards'>
          <Card border="dark" style={{ width: '25rem' }}>
            <Card.Header className='services-header'>General Services</Card.Header>
            <Card.Body>
              <Card.Text className='general-service-card'>
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
            <Card.Header className='services-header'>Diagnosis</Card.Header>
            <Card.Body>
              <Card.Title>Weird sounds? Did that light on your dashboard come on?</Card.Title>
              <Card.Text><br />
                Don't worry, we're here to diagnose and recommend treatment.<br /><br />
                Our professional techs are here to make sure you feel safe and secure when you're behind the wheel.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Oil change info: https://www.progressive.com/lifelanes/on-the-road/importance-of-oil-changes/#:~:text=Regular%20oil%20changes%20improve%20your,properly%20lubricated%20and%20running%20smoothly. */}
          <Card border="dark" style={{ width: '25rem' }}>
            <Card.Header className='services-header'>Oil Change</Card.Header>
            <Card.Body>
              <Card.Title>Keep your engine running smoothly</Card.Title>
              <Card.Text><br />
                It is important to maintain a regular oil change schedule to prevent dirty or low-levels of oil,
                causing friction between the engine's parts, which causes advanced wear-and-tear on your vehicle.<br /><br />
                The following things are done:
                <li>Engine oil and oil filter are replaced </li>
                <li>Level and condition of coolant, transmission, and windshield washer fluid are checked</li>
                <li>Air filter is inspected</li>
                <li>Overall condition of the engine and other basic safety checks are performed to ensure that your vehicle is in good working order.</li><br />
                Depending on your vehicle and its oil type, we recommend oil changes every 3,000-6,000 miles.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Breaks info link: https://www.kbb.com/car-advice/brake-repair-do-you-need-it/ */}
          <div className="break"></div>
          <Card border="dark" style={{ width: '25rem' }}>
            <Card.Header className='services-header'>Brake Service</Card.Header>
            <Card.Body>
              <Card.Title>Come to a complete stop!</Card.Title>
              <Card.Text><br />
                If you have any signs of brake issues, including squeaking sound, feeling differently, bumpiness with braking, please urgently give us a call to come in for an inspection, to keep you and your family safe!<br /><br />
                The following parts will be inspected and/or replaced:
                  <li>Brake pads, fluid, and shoes</li>
                  <li>Calipers</li>
                  <li>Rotors</li>
                  <li>Drums</li>
                  <br />
                Most brakes, depending your driving style, and the type of environment you drive in, can last up to about 50,000 miles before needing replacement.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Rotation info link: https://www.discounttire.com/learn/tire-rotations */}
          <Card border="dark" style={{ width: '25rem' }}>
            <Card.Header className='services-header'>Tire Rotation, Repairs</Card.Header>
            <Card.Body>
              <Card.Title>Uneven treads? Flat tire? </Card.Title>
              <Card.Text><br />
                A tire rotation is when the tires are moved from one position of the car to another, most common is when the tires on the front are swapped with the tires on the back.<br /><br />
                Why is this important? It will keep your tires' treads even for a smooth ride.<br /><br />
                Many factors can cause uneven wear, even if one side of your car is heavier than the other! We recommend tire rotations every 6,000-8,000 miles, depending on your vehicle and wear.<br /><br />
                We will assess flat tire issues, either a plug or even if a new tire is needed.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Alignment info link: https://www.jdpower.com/cars/shopping-guides/how-to-do-an-alignment-on-a-car */}
          <Card border="dark" style={{ width: '25rem' }}>
            <Card.Header className='services-header'>Laser Alignment</Card.Header>
            <Card.Body>
              <Card.Title>Can't avoid all those potholes?</Card.Title>
              <Card.Text><br />
                Do you find that your vehicle tends to pull to one side, and you're fighting it just to drive straight? Your wheels and axles may not be lined up correctly.<br /><br />
                An alignment will make your steering more precise and safer, and make sure that the parts you don't see, the tires and axles, are well-kept. If your tires are not aligned, the tires could wear unevenly, causing you to get more frequent tire changes.<br /><br />
                While there are many reasons we love living in Southern California, we know that there are many potholes and rough roads that just can't be avoided. If you happen to encounter one and feel that your car feels differently, please come see us.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="break"></div>
          <div className="break"></div>
          <div className="break"></div>
          <div className="break"></div>

          <h1 className='title'>Cars We Service</h1>

          <div className="break"></div>
          <img alt='Compliation of car logos' className='car-logos' src='CarBrands.png'></img>
          <div className="break"></div>
          <div className="break"></div>
          <p>Don't see your car listed? Give us a call.</p>

        </div>
      </div>

    </div>
  );
}

export default Services;
