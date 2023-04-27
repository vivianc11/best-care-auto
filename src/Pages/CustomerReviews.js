import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './CustomerReview.css';


const CustomerReviews = () => {

  return (
    <div>
        <h1 className='title'>Customer Reviews</h1>
      <hr class="hr hr-blurry" />
    
    <div className='review-card-container'>
      <Card className='card-content'>
        <Card.Body>
          <div className='card-top'>
            <div className='reviewer-info'>
              {/* Photos for yelp are set at 214x214 px */}
              <img className='reviewer-yelp-photo' src='./yelp-profile-rose.png' alt='Pic of Reviewer' />
              <div className='name-and-location'>
                <Card.Title>Rose L.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">San Diego, CA</Card.Subtitle>
                
              </div>
            </div>
            <img className='yelp-rating' src='./yelp-stars2.png' alt='rating' />
          </div>

          <Card.Text style={{textAlign: 'left'}}>
            I had this AWFUL and scary problem with my Subaru Forester: it kept rattling sooo badly that it felt like you're driving 
            on cobblestone and you can barely hear the music in the car at high speeds... I know we have terrible roads in SD but this 
            was not just the roads. 
            <br/><br/>
            I got a diagnosis with a mechanic in SD but I got a recommendation to Tom and his crew here. Tom offered to fix THE problem, 
            along with other concerns for WAAAAY cheaper. I knew it was going to be an awful drive up full of anxiety but Tom told me that 
            it'll feel bad, but I'd be okay to get here. He was right, sitting in the waiting room now while they fix my control arm.
            <br/><br/>
            Even while being here, the front desk (Kevin) and the mechanics (Dennis, Dustin, Nico) are all so nice and they were really good 
            at explaining the issues. They even confirmed with me that my fears while driving were super valid since they did the road test. 
            The situation is not nice but the validation was. 
            <br/><br/>
            Tom and team made sure everything was good, and even stayed late to get things completed because they knew we had to drive back 
            to San Diego. It was amazing.
            <br/><br/>
            They also do not upsell. So important in a mechanic, as you all know.
            <br/><br/>
            Definitely coming back if I need anymore repairs!!!
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted"><a href='https://www.yelp.com/biz/best-care-auto-garden-grove?hrid=9rli3q4_4IgKLxOM77t-iQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)' target="_blank" rel="noopener noreferrer">Read on Yelp</a></Card.Footer>
      </Card>

      <Card className='card-content' >
        <Card.Body>
          <div className='card-top'>
            <div className='reviewer-info'>
            <img className='reviewer-yelp-photo' src='./yelp-profile-brian.png' alt='Pic of Reviewer' />
              <div className='name-and-location'>
                <Card.Title>Brian D.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Aliso Viejo, CA</Card.Subtitle>
                
              </div>
            </div>
            <img className='yelp-rating' src='./yelp-stars2.png' alt='rating' />
          </div>

          <Card.Text style={{textAlign: 'left'}}>
            I needed to get some coilovers and rear upper control arms installed as well an alignment so I called BCA. Wanted to schedule an appointment asap and was told that I could drop it off the same day and that'll it'll be worked on and finished the following day, huge plus considering it was the weekend.<br/><br/>
            Brought my car in and Dennis made the whole process an absolute breeze. Would call to update me right away if anything came up and went above and beyond with the service. Got a loyal customer from here on out and if you need anything that has to do with suspension or alignment. Take your car here, you won't regret it.
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted"><a href='https://www.yelp.com/biz/best-care-auto-garden-grove?hrid=7s-jzMhm6AwRZODM70_reA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)' target="_blank" rel="noopener noreferrer">Read on Yelp</a></Card.Footer>
      </Card>

      <Card className='card-content' >
        <Card.Body>
          <div className='card-top'>
            <div className='reviewer-info'>
            <img className='reviewer-yelp-photo' src='./yelp-profile-jennifer.png' alt='Pic of Reviewer' />
              <div className='name-and-location'>
                <Card.Title>Jennifer T.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fountain Valley, CA</Card.Subtitle>
                
              </div>
            </div>
            <img className='yelp-rating' src='./yelp-stars2.png' alt='rating' />
          </div>

          <Card.Text style={{textAlign: 'left'}}>
            I've been going here for a few years. Initially I found this place through Yelp and I had been a loyal customer since. They are responsive and they do honest work! Everytime I go here they find the best prices for me and they fix my car with no issues. Generally I've been able to find appointments that week or even the next day. I went in today thinking that I might need to change my starter, and they ran a diagnostic and found out my battery wasn't loading. Dennis told me to go back to Costco and get a new battery since I still had a warranty. I ended up just doing that. They never upsell which is awesome because I really don't know anything about cars. My car always runs so smoothly after my visit from that shop. I am definitely going to recommend them to all of my friends and family!
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted"><a href='https://www.yelp.com/biz/best-care-auto-garden-grove?hrid=icysdGN6uuKHWP2eIoyWHQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)' target="_blank" rel="noopener noreferrer">Read more on Yelp</a></Card.Footer>
      </Card>

      <Card className='card-content' >
        <Card.Body>
          <div className='card-top'>
            <div className='reviewer-info'>
            <img className='reviewer-google-photo' src='./google-profile-erick2.png' alt='Pic of Reviewer' />
              <div className='name-and-location'>
                <Card.Title>Erick C.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              </div>
            </div>
            <img className='google-rating' src='./google-stars2.png' alt='rating' />
          </div>

          <Card.Text style={{textAlign: 'left'}}>
          Decided to give this place a shot based on the stellar reviews.  Dennis and crew did not disappoint as they are true enthusiasts with a passion for motorsports.  My weapon of choice is an Evo X set up for spirited driving.  I'm pretty selective about who I'll allow to work on my car, but it's safe to say I'll be back for future maintenance and upgrades.
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted"><a href='https://goo.gl/maps/KxE65r1xs4fTjeXs7' target="_blank" rel="noopener noreferrer">Read on Google Reviews</a></Card.Footer>
      </Card>

      <Card className='card-content' >
        <Card.Body>
          <div className='card-top'>
            <div className='reviewer-info'>
            <img className='reviewer-google-photo' src='./google-profile-kristen2.png' alt='Pic of Reviewer' />
              <div className='name-and-location'>
                <Card.Title>Kristen B.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                
              </div>
            </div>
            <img className='google-rating' src='./google-stars2.png' alt='rating' />
          </div>

          <Card.Text style={{textAlign: 'left'}}>
          I went here from a recommendation of a friend due to my car not starting. I was able to get a good deal for a new battery and the owner was very transparent with the pricing. Overall, very pleasant experience. I will certainly consider this place for any of my future automotive needs.
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted"><a href='https://goo.gl/maps/q6sXTZ9uoGGb3pur6' target="_blank" rel="noopener noreferrer">Read on Google Reviews</a></Card.Footer>
      </Card>

      <Card className='card-content' >
        <Card.Body>
          <div className='card-top'>
            <div className='reviewer-info'>
            <img className='reviewer-google-photo' src='./google-profile-paul2.png' alt='Pic of Reviewer' />
              <div className='name-and-location'>
                <Card.Title>Paul V.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                
              </div>
            </div>
            <img className='google-rating' src='./google-stars2.png' alt='rating' />
          </div>

          <Card.Text style={{textAlign: 'left'}}>
          I had coilovers installed by another shop and they messed it all up, took it to best care auto Tom and Denis are really good people and did an awesome job on fixing my suspension. These guys and their employees do really good work and are honest. Totally recommend them!
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted"><a href='https://goo.gl/maps/xCdBNHV5sr7XXbaz9' target="_blank" rel="noopener noreferrer">Read on Google Reviews</a></Card.Footer>
      </Card>
    </div>
    </div>
  )

}

export default CustomerReviews;
