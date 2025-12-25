import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'
import { motion, spring } from 'framer-motion'


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter innerWidth paddings hero-container">
        <div className="hero-left">
          <div className="flexColStart hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}
            >
              Discover <br /> the most suitable <br /> property</motion.h1>
          </div>
          <div className="flexColStart hero-description ">
            <span className='secondaryText'>find a varieties of principle that suit you easily</span>
            <span className='secondaryText'>forget all dificulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexStart stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Award winning</span>
            </div>

          </div>
        </div>
        <div className="hero-right">
          <motion.div className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration:2,
              type:"spring"
            }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>

        </div>
      </div>
    </section>

  )
}

export default Hero
