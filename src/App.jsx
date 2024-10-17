import React from 'react'

import samir from './assets/samir_castro.jpg'

import './app.css'

export const App = () => {
  return (
    <>
      <div className='header-container'>
        <div className='image-header'>
          <img className='image' src={samir} alt="samir" />
        </div>
        <div className='description-container'>
          <h2  className='title-description'>-------------------------</h2>
          <h2 className='title-description'>Servicios:</h2>
          <a href='https://bugfixerpro.com/' target='_blank' className='btn-description'>Bug Fixer Pro</a>
          <a className='btn-description'>Más servicios</a>
          <a className='btn-description'>Más servicios</a>
        </div>
      </div>
    </>
  )
}