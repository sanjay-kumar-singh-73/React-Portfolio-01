import React from 'react'
import './Hero.css'
import Img from '../assests/Port-img (2).png'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function Hero() {
  return (


   

    <>
      <div className="hero">
        <div className="right">
          <div className="image"> <img src={Img} alt='' /></div> 
        </div>
        <div className="left">
          <h2>Hey</h2>
          <h1>I'am Ayushi Chauhan</h1>
          <h3>Frontend Developer <span>Engineer</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at voluptates accusamus ut sunt placeat? Labore obcaecati qui mollitia pariatur, autem ut officiis voluptatum possimus, modi repudiandae odit accusantium repellat.</p>
          <div className="buttton"><button className='h-btn'>Resume</button></div>
        </div>
        <div className="social-media">
          <li><a href='#'><FaFacebookF /></a></li>
          <li><a href='#'><FaInstagram /></a></li>
          <li><a href='#'><FaTwitter /></a></li>
          <li><a href='#'><FaLinkedinIn /></a></li>
        </div>
      </div>
    </>
  )
}

export default Hero
