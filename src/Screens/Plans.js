import React from 'react'
import './Plans.css'

export const Plans = ({ plan, pixels }) => {
  return (
    <div className='plan'>
      <div className='plan__name'>
        <h3>{plan}</h3>
        <h4>{pixels}</h4>
      </div>
      <div className='plan__button'>
        <button
          onClick={() => {
            alert(
              'STRIPE checkout integration process will be added in future, Thanks for Subscribing!!'
            )
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}
