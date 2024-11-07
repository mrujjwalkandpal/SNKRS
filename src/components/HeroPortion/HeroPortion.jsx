import React from 'react'
import './HeroPortion.css'
import HeroImg from '../../assets/hero-img.png'
import amznImg from '../../assets/amzn-icon.avif'
import flpkrImg from '../../assets/flpkr-icon.png'

const HeroPortion = () => {
  return (
   <>
    <div className="hero">
        <div className="left">
            <div className="up">
                <h1>YOUR FEET <span>DESERVES</span> THE <br /> BEST OF THE BEST</h1>
                <h3>Step into Comfort, Style, and Durability — Your Perfect Fit for Every Journey and Every Occasion</h3>
            </div>
            <div className="down">
                <div className="btns">
                <button className='shop-now'>Shop Now</button>
                <button className='category'>Category</button>
                </div>
                <div className="hr"></div>
                <div className="available-on">
                    <p>Also Avaliable On - </p>
                    <div className="avail-btn">
                        <img src={amznImg} alt="" />
                        <img src={flpkrImg} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="right">
            <img src={HeroImg} alt="" />
        </div>
   
    </div>
    <div className="hr"></div>
   </>
  )
}

export default HeroPortion