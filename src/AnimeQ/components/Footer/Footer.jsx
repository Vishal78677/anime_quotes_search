import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer_Icons'>
      <div className='circle_icon'>
        <a
          href='https://instagram.com/vishal_dantani_777?igshid=ZDdkNTZiNTM='
          target='_blank'
        >
          <i className=' icon_size fa-brands fa-instagram'></i>
        </a>
      </div>
      <div className='circle_icon'>
        <a
          href='https://www.facebook.com/vishal.dantani.9250?mibextid=ZbWKwL'
          target='_blank'
        >
          <i className=' icon_size fa-brands fa-facebook'></i>
        </a>
      </div>
      <div className='circle_icon'>
        <a
          href='https://www.linkedin.com/in/vishal-dantani-574b7b157'
          target='_blank'
        >
          <i className=' icon_size fa-brands fa-linkedin'></i>
        </a>
      </div>
      <div className='circle_icon'>
        <a href='https://github.com/Vishal78677' target='_blank'>
          <i className=' icon_size fa-brands fa-github'></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
