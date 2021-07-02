import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const [show, handleShow] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const history = useHistory()
  console.log('show', showButton)
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => {
      window.removeEventListener('scroll', transitionNavBar)
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          onClick={() => history.push('/')}
          className='nav__logo'
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />
        {!showButton ? (
          <button
            onClick={(e) => {
              // e.preventDefault()
              // console.log(showButton)
              history.push('/profile')
              setShowButton(!showButton)
            }}
            className='nav__button'
          >
            Plans
          </button>
        ) : (
          <img
            onClick={(e) => {
              // e.preventDefault()
              history.push('/')
              setShowButton(!showButton)
            }}
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
          />
        )}
      </div>
    </div>
  )
}

export default NavBar
