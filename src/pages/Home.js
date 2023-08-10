import React from 'react'
import './home.css'

function Home() {
  return (
    <>
  <div class="image-container">
  <img src={process.env.PUBLIC_URL + 'images/home/w6.jpg'} alt='' />
  <img src={process.env.PUBLIC_URL + 'images/home/w16.jpg'} alt='' />
  <img src={process.env.PUBLIC_URL + 'images/home/p2.jpg'} alt='' />
  <img src={process.env.PUBLIC_URL + 'images/home/p3.jpg'} alt='' />
  </div>
    </>
  );
}

export default Home;