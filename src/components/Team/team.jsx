import React from 'react'
import './team.css'
import 'swiper/css'
import chef2 from '../../assets/chef2.png'
import chef1 from '../../assets/chef1.png'
import chef3 from '../../assets/chef3.png'
import chef4 from '../../assets/chef4.png'
import chef5 from '../../assets/chef5.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

const data=[
  {
      avatar: chef1,
      names: 'KAHN Petit',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptatem eveniet, cumque ex, ad minima mollitia, dolores tenetur molestias praesentium! Nostrum, laudantium optio tenetur mollitia iure deserunt velit vero'
  },
  {
      avatar: chef2,
      names: 'Gabriela Mendez',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptatem eveniet, cumque ex, ad minima mollitia, dolores tenetur molestias praesentium! Nostrum, laudantium optio tenetur mollitia iure deserunt velit vero'

  },
  {
      avatar: chef3,
      names: 'John Mark',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptatem eveniet, cumque ex, ad minima mollitia, dolores tenetur molestias praesentium! Nostrum, laudantium optio tenetur mollitia iure deserunt velit vero'
  },
  {
      avatar: chef4,
      names: 'Jacque Cuso',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptatem eveniet, cumque ex, ad minima mollitia, dolores tenetur molestias praesentium! Nostrum, laudantium optio tenetur mollitia iure deserunt velit vero'
  },
  {
      avatar: chef5,
      names: 'Lamont Pierre',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptatem eveniet, cumque ex, ad minima mollitia, dolores tenetur molestias praesentium! Nostrum, laudantium optio tenetur mollitia iure deserunt velit vero'
  },
]



const team = () => {
  return (
    <section className='teams' id='teams' 
    modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={3}
     
      pagination={{ clickable: true }}
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        <h2>Our Teams</h2>
        <h1>Come Meet our Awesome team</h1>
        <Swiper className='container'>
            {
                data.map(({avatar,names,description},index) =>{
                    return(
                        <SwiperSlide key={index} className='team'>
                             <div className='img'>
                                <img src={avatar} alt="" />

                            </div>
                            <h5>{names}</h5>
                            <small className='info'>{description}
                            </small>

                        </SwiperSlide>
                    )
                })
            }
            
           

        </Swiper>

    </section>
  )
}

export default team