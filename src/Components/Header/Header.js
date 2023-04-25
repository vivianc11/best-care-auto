import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <img className='bca-logo' src='./BestCareAuto.png' alt='Best Care Auto Logo' />      
      <img className='ase-logo' src='./ase-logo.png' alt='ASE pic'/>
      <div class="break"></div>
      <div class="break"></div>
      <div>
        
        <h3><span className='contact-text'>Contact Us: </span><span className='bold'>(714) 722-3706</span></h3>
      </div>

      <div className='social-logos'>
          <a href="https://www.yelp.com/biz/best-care-auto-garden-grove" target="_blank" rel="noopener noreferrer"><img src='./yelp.png' alt="Yelp Logo"></img></a> 
          <a href="https://www.instagram.com/bestcareauto/" target="_blank" rel="noopener noreferrer"><img src='./instagram.png' alt="Instagram Logo"></img></a>
          <a href="https://www.facebook.com/bestcareauto/" target="_blank" rel="noopener noreferrer"><img src='./facebook.png' alt="Facebook Logo"></img></a>
      </div>
    </div>

  );
}

export default Header;
