import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.scss'

const getCurrentYear = () => {
  return new Date().getFullYear();
};
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='footer-container'>
      <p>© {getCurrentYear()} Meggie, todos los derechos reservados. </p>
      <div className='social-icons'>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;