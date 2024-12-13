import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>gemini</p>
            <img src={assets.user_icon} alt="" />

        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>HEllo,MEEt</span></p>
                <p>AAj kya plan hai</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Koi acha gaana batao</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Koi acha gaana batao</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Koi acha gaana batao</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Koi acha gaana batao</p>
                    <img src={assets.code_icon} alt="" />
                </div>

            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='enter the text' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit quo necessitatibus optio aliquam iusto, asperiores id beatae eos sed!
                </p>
                
            </div>
        </div>
      </div>
  )
}

export default Main