import React from 'react'
import { sosialLinks } from '../Data'
import PageLinks from './PageLinks';
import SosialLink from './SosialLink';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass='footer-links'itemClass='footer-link'/>

      <ul className="footer-icons">
        {sosialLinks.map((link) => {
          return(
            <SosialLink key={link.id} {...link} itemClass='footer-icon'/>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer