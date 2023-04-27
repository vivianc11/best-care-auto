import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./style.css";

const FAQ = () => {
  return (
    <div>
      <h1 className='title'>Frequently Asked Questions</h1>
      
      <hr class="hr hr-blurry" />
      
      <h6 style={{paddingTop: '10px', paddingBottom: '5px'}}>We've included some frequently asked questions below. If you have more questions, feel free to reach out. We're dedicated to addressing all your concerns!</h6>

      <section>
        <Accordion style={{margin: "20px"}}>

        <Accordion.Item eventKey="0">  
          <Accordion.Header as="h5">Do I have to make an appointment before bringing in my vehicle?</Accordion.Header>
            <Accordion.Body>
              In order to respect your time, give us a call at your convenience and we’ll coordinate to accommodate your schedule. <br/><br/>
              If you prefer, you’re more than welcome to stop by, there just may be a waiting period. We want to do our best to minimize your wait time.​
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">  
          <Accordion.Header as="h5">How will I know the progress of repairs on my vehicle?</Accordion.Header>
            <Accordion.Body>
              During repairs, our team will keep you informed as often as you'd like. If there are any delays or changes in the schedule, we will inform you immediately.<br/><br/>
              Once you car is complete, you will receive a phone call from our team member informing you that the vehicle is ready!
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">  
          <Accordion.Header as="h5">When I leave my car at your shop, can I get a ride to another destination?</Accordion.Header>
            <Accordion.Body>
              Yes, based on driver availability, we are more than willing to transport you to your destination if it is within a reasonable distance. Best of all it is FREE.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">  
          <Accordion.Header as="h5">Do you offer a towing service?</Accordion.Header>
            <Accordion.Body>
              We work with multiple towing companies, and most likely will be able to dispatch one to you if needed.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">  
          <Accordion.Header as="h5">Could you do an alignment on a lowered vehicle?</Accordion.Header>
            <Accordion.Body>
              We are lowered-car friendly, and can align vehicles with rims up to 24 inches.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">  
          <Accordion.Header as="h5">Do you offer any warranty on your repairs?</Accordion.Header>
            <Accordion.Body>
              Yes, we follow industry standards. We have warranties for 1 year or 12,000 miles, whichever comes first.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">  
          <Accordion.Header as="h5">Can I bring my own parts for the repairs?</Accordion.Header>
            <Accordion.Body>
              Of course! We will also make sure that it is the correct corresponding part prior to installation/usage.
              <br/><br/>
              Note: Warranties will not be honored if we utilize your parts/materials.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">  
          <Accordion.Header as="h5">Do you offer any financing options?</Accordion.Header>
            <Accordion.Body>
              Not at the moment, but we are looking into options.
              <br/><br/>
              We understand that car costs can be stressful, please give us a call to discuss costs. Your safety and peace-of-mind are our priority.
            </Accordion.Body>
        </Accordion.Item>

        </Accordion>
      </section>

    </div>
  );
}

export default FAQ;
