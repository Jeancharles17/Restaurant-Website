import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Crepes Restaurant</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#home-section">About</a></li>
        <li><a href="#teams">Team</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservation">Reservation</a></li>
        
      </ul>
      <div className='footer-socials'>
    
        <a href="https://www.instagram.com/" target="_blank"><BsInstagram/></a>
        
        <a href="tel:+17863024917"><BsFillTelephoneFill/></a>

      </div>
      <div className='copy_right'>
        <small>&copy; Jean Charles. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer