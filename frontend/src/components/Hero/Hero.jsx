import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'

export default function Hero() {
  return (

    // hero 
    <div className="hero">

        {/* hero-left */}
        <div className="hero-left">
            <h2>New Arrivals Only</h2>

            {/* new collections for everyone */}
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src= {hand_icon} alt="hand-icon" />
                </div>

                <p>collections</p>
                <p>for everyone</p>
            </div>

            <div className="hero-latest-button">
                <div>Latest Collections</div>
                <img src= {arrow_icon} alt="arrow-icon" />
            </div>
        </div>

        {/* hero-right */}
        <div className="hero-right">
            
        </div>
    </div>
  )
}
