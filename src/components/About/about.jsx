import React from 'react'
import './about.css'
import IMG from '../../assets/pancakes1.png'
import IMG1 from '../../assets/PARIS.webp'
import IMG2 from '../../assets/LA.jpg'
import IMG3 from '../../assets/Newyork.webp'
import IMG4 from '../../assets/london.webp'
import IMG5 from '../../assets/miami.jpeg'
import IMG6 from '../../assets/dubai.jpg'

const about = () => {
  return (
    <section className='home-section'>
        <h2>About</h2>
        <h5>Come check Us out!</h5>
        <div className='container'>
            <div className='img-section'>
                <img src={IMG} alt="" />

            </div>
            <div className='about-section'>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas consequatur blanditiis iure molestiae adipisci nihil maiores quasi eius ipsa suscipit consequuntur corporis repellendus aspernatur, voluptate modi, cupiditate amet est.</p>

            </div>

        </div>
        <div className='locations'>
            <h2>Our Locations</h2> 
            <div className='container-location'>
                <article className='box'>
                    <h4>Paris</h4>
                    <img src={IMG1} alt="" />
                    <a href="#reservation" className='BTN'>Reservation</a>

                </article>
                <article className='box'>
                    <h4>Los Angeles</h4>
                    <img src={IMG2} alt="" />
                    <a href="#reservation" className='BTN'>Reservation</a>

                </article>
                <article className='box'>
                    <h4>New York</h4>
                    <img src={IMG3} alt="" />
                    <a href="#reservation" className='BTN'>Reservation</a>

                </article>
                <article className='box'>
                    <h4>London</h4>
                    <img src={IMG4} alt="" />
                    <a href="#reservation" className='BTN'>Reservation</a>

                </article>
                <article className='box'>
                    <h4>Miami</h4>
                    <img src={IMG5} alt="" />
                    <a href="#reservation" className='BTN'>Reservation</a>

                </article>
                <article className='box'>
                    <h4>Dubai</h4>
                    <img src={IMG6} alt="" />
                    <a href="#reservation" className='BTN'>Reservation</a>

                </article>

            </div>
            


        </div>
       
    </section>
  )
}

export default about