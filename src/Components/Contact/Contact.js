import { GitHub, LinkedIn, Phone } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Element } from 'react-scroll';
import "./Contact.css";
const Contact = () => {
  return (
    <Element className='contact' id='contact'>
      <h1>Contact</h1>
      <div className='contact__container'>
        <p>
          Email : <span>santhaneelan202001@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@Santhan07</span>
        </p>
        <div className='contact__icons'>
          <a href='google.com'>
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
          <a href='google.com'>
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href='google.com'>
            <IconButton>
              <Phone />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  )
}

export default Contact
