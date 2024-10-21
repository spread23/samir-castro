import React from 'react'

import samir from './assets/samir_castro_logo.png'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa";

import './app.css'

export const App = () => {
  return (
    <>
      <div className='header-container'>
        <div className='image-header'>
          <img className='image' src={samir} alt="samir" />
        </div>
        <div className='description-container'>
          <h1 className='title-logo'>Samir Castro</h1>
          <h2 className='title-description'>Servicios:</h2>
          <a href='https://bugfixerpro.com/' target='_blank' className='btn-description'>Bug Fixer Pro</a>
          <a className='btn-description-two'>Blog</a>
          <a className='btn-description-three'>Más servicios</a>
        </div>

        <div className='footer-container'>
          <div className='social-media'>
            <a href="#"><FaInstagram className='icon'></FaInstagram></a>
            <a href="#"><FaFacebook className='icon'></FaFacebook></a>
            <a href="#"><FaTiktok className='icon'></FaTiktok></a>
          </div>
        </div>
      </div>
    </>
  )
}