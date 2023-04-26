import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <a href="/"><img className='bca-logo hover-shadow' src='./BestCareAuto.png' alt='Best Care Auto Logo' /></a>      
      <img className='ase-logo' src='./ase-logo.png' alt='ASE pic'/>
       <div className="break"></div>
       <div className="break"></div>
      <div>
        
        <h3><span className='contact-text'>Contact Us: </span><span className='bold phone-text'>(714) 722-3706</span></h3>
      </div>

      <div className='social-logos'>
          <a href="https://www.yelp.com/biz/best-care-auto-garden-grove" target="_blank" rel="noopener noreferrer"><img src='./yelp.png' alt="Yelp Logo"></img></a> 
          <a href="https://www.instagram.com/bestcareauto/" target="_blank" rel="noopener noreferrer"><img src='./instagram.png' alt="Instagram Logo"></img></a>
          <a href="https://www.facebook.com/bestcareauto/" target="_blank" rel="noopener noreferrer"><img src='./facebook.png' alt="Facebook Logo"></img></a>
          <a href="https://www.google.com/maps/place/Best+Care+Auto/@33.7592565,-117.9309411,17z/data=!4m16!1m9!3m8!1s0x80dd27f38ad98e6b:0xc3e6620fa0b73186!2sBest+Care+Auto!8m2!3d33.7592565!4d-117.9309411!9m1!1b1!16s%2Fg%2F11b6x_sxwx!3m5!1s0x80dd27f38ad98e6b:0xc3e6620fa0b73186!8m2!3d33.7592565!4d-117.9309411!16s%2Fg%2F11b6x_sxwx" target="_blank" rel="noopener noreferrer"><img src='./google.png' alt="Google Logo"></img></a>
      </div>
    </div>

  );
}

export default Header;
