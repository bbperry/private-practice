import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
  
  return (
    <div className='footer-container'>
        <div className='brand-container'>
            <div>
                <h1>hello</h1>
            </div>
            <div className='tagline'>wild, sustainable, fishermen direct</div>
            <h6 className='phone'>360.393.6322</h6> 
            <div className="admin-link-container">
            <Link className="admin-link" to="/login">admin</Link>
            </div>
        </div>
    </div>
  );
}

export default Footer;
