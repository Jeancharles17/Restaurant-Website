import React from 'react'
import './home.css'
import backgroundVideo from '../../assets/pankes.mp4'


const home = () => {
  return (
    <section className="home">
      <video autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    <div className="home-content">
      <h1>Crepes Restaurants</h1>
    </div>
  </section>
   
  )
}

export default home