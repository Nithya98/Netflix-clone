import React from 'react'
import './InfoBox.css'
import { useHistory } from 'react-router-dom'

const InfoBox = () => {
  const history = useHistory()

  return (
    <div className='infobox'>
      <div className='infobox__contents'>
        <h1 className='infobox__heading'>There’s even more to watch.</h1>
        <p className='infobox__contents_p'>
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals and more. Watch as much
          as you want, anytime you want.
        </p>
        <button
          onClick={() => history.push('/profile')}
          className='infobox__button'
        >
          Join Now
        </button>
      </div>
    </div>
  )
}

export default InfoBox
