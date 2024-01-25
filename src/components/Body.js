import React from 'react'
import Faqs from './Faqs.js';
import Features from './Features.js';

import FirstPart from './FirstPart.js';
import Pricing from './Pricing.js';
import Tail from './Tail.js';
import Testimonial from './Testimonial.js';
import "../App.css";



const Body = () => {
  return (
    <div >
      <FirstPart/>
      <div id="features" className="w-full h-20 custom_colour"></div>

      <Features/>
      <div id="testimonial" className="w-full h-20 custom_colour"></div>
      <Testimonial/>
      <div id="pricing" className="w-full h-20 custom_colour"></div>

      <Pricing/>
      <div id="faqs" className="w-full h-20 custom_colour"></div>

      <Faqs/>
      <Tail/>
      
    </div>
  )
}

export default Body