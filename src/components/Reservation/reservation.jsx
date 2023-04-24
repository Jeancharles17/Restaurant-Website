import React, { useState } from 'react';
import './reservation.css'
import video from '../../assets/pankes.mp4'



function ReservationSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send reservation data to server or API
    console.log('Reservation submitted');
  };

 

  return (
    
    <section className='res' id='reservation'>
       {/* <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video> */}
       
        
        <h2>Make a Reservation</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required />

            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" value={guests} min="1" max="10" onChange={(e) => setGuests(e.target.value)} required />

            <label htmlFor="location">Location:</label>
<select id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required>
  <option value="">Select a location</option>
  <option value="Paris">Paris</option>
  <option value="London">London</option>
  <option value="Miami">Miami</option>
  <option value="New York">New York</option>
  <option value="Dubai">Dubai</option>
  <option value="Los Angeles">Los Angeles</option>
</select>


            <label htmlFor="message">Special Requests:</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <input type="submit" value="Submit" />
        </form>
        
    </section>    
  );
}

export default ReservationSection;
