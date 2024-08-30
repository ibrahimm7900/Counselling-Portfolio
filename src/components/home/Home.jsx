import React from 'react'
import Social from './Social'
import Data from './Data'
import './home.css';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home section" id='home'>
    <div className='home_container container grid'>
      <div className="home_content grid">
        <Social />
       
        <div className="home_img">
    <svg 
    viewBox="0 0 506 506" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="transparent">
        <circle
            cx="253"
            cy="253"
            r="249"
            stroke="white"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray="700" /* This divides the circle into two halves */
            strokeDashoffset="1"
            className="circle-animation"
        />
        
    </svg> 
</div>

        <Data />
      </div>

      <ScrollDown />
      
      
    </div>
    </section>
  )
}

export default Home

