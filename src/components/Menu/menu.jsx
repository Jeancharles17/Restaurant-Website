import React from 'react'
import './menu.css'
import IMG1 from '../../assets/crepes.png'
import IMG2 from '../../assets/cros.png'
import IMG3 from '../../assets/egg.png'
import IMG4 from '../../assets/french.png'
import IMG5 from '../../assets/acai.png'
import IMG6 from '../../assets/juice.webp'
import IMG7 from '../../assets/sandwich.png'
import IMG8 from '../../assets/steak.png'
import IMG9 from '../../assets/chicken.png'
import IMG10 from '../../assets/salmon.webp'


const menu = () => {
  return (
    <section className='experience' id='Menu'>
        <h2>Menu</h2>
        <div className='experience_container'>
            <div className='experience_frontend'>
                <h3>Breakfast</h3>
                <div className='experience_content'>
                    <article className='experience_details'>
                        <img src={IMG1} alt="" />
                        <h4>Crepes</h4>
                        <h5>$10.99</h5>

                    </article>
                    <article className='experience_details'>
                        <img src={IMG2} alt="" />
                        <h4>Croissant</h4>
                        <h5>$7.99</h5>

                    </article>
                    <article className='experience_details'>
                        <img src={IMG3} alt="" />
                        <h4>Eggs</h4>
                        <h5>$10.99</h5>

                    </article>
                    <article className='experience_details'>
                        <img src={IMG4} alt="" />
                        <h4>French Toast</h4>
                        <h5>$8.99</h5>

                    </article>
                    <article className='experience_details'>
                        <img src={IMG5} alt="" />
                        <h4>Acai Bowl</h4>
                        <h5>$14.99</h5>

                    </article>

                </div>

            </div>
            <div className='experience_frontend'>
                <h3>Lunch</h3>
                <div className='experience_content'>
                    <article className='experience_details'>
                        <img src={IMG6} alt="" />
                        <h4>Sandwich</h4>
                        <h5>$10.99</h5>

                    </article>
                    <article className='experience_details'>
                        <img src={IMG7} alt="" />
                        <h4>Juice</h4>
                        <h5>$5.99</h5>

                    </article>
                    <article className='experience_details'>
                        <img src={IMG8} alt="" />
                        <h4>Steak</h4>
                        <h5>$30.99</h5>

                    </article>
                    <article className='experience_details'>
                        <img src={IMG9} alt="" />
                        <h4>Chicken</h4>
                        <h5>$20.99</h5>

                    </article>
                    <article className='experience_details'>
                        <img src={IMG10} alt="" />
                        <h4>Salmon</h4>
                        <h5>$40.99</h5>

                    </article>

                </div>

            </div>

        </div>

    </section>
  )
}

export default menu
        