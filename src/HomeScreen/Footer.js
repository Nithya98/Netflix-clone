import React from 'react'
import './Footer.css'
import {
  FaInstagram,
  FaTwitter,
  FaRedditAlien,
  FaYoutube,
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='footer'>
      <p>Questions? Contact us.</p>
      <div className='footer__links'>
        <div className='footer_contents'>
          <ul>
            <li>FAQ</li>
            <li>Media Centre</li>
            <li>Ways to Watch</li>
            <li>Speed Test</li>
          </ul>
        </div>

        <div className='footer_contents'>
          <ul>
            <li>Privacy</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
        <div className='footer_contents'>
          <ul>
            <li>Legal Notices</li>
            <li>Contact Us</li>
            <li>Ways to Watch</li>
          </ul>
        </div>
        <div className='footer_contents'>
          <ul>
            <li>Legal Notices</li>
            <li>Contact Us</li>
            <li>Ways to Watch</li>
          </ul>
        </div>

        <div>
          <ul className='footer_contents_social'>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaRedditAlien />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>

      <div className='copyrights'>
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Netflix clone </span>
          All rights reserved | created by Nithya (NS)
        </h5>
      </div>
    </div>
  )
}
