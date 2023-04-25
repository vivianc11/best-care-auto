import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <img className='bca-logo' src='./BestCareAuto.png' alt='Best Care Auto Logo' />
      <div className='header-desc'>
        <div>YOUR TRUSTED GARDEN GROVE MECHANICS PROVIDING TOP-NOTCH AUTOMOTIVE SERVICES WITH A COMMITMENT TO QUALITY, RELIABILITY, AND CUSTOMER SATISFACTION</div>
        <h3><span className='bold'>Contact Us: </span><span>(714) 722-3706</span></h3>
      </div>
      <img className='ase-logo' src='./ase-logo.png' alt='ASE pic'/>
    </div>
  );
}

export default Header;
