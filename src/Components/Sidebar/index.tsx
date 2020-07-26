import React from 'react'
import './style.css'
// import selfImg from '../../assets/images/self.png'
export default function Sidebar() {

  return (
    <div className='side-bar full-size'>
      <div className="introduction-div">
        <div className="personal-img">
          {/* <img className="personal-img" src={selfImg} alt=""/> */}
        </div>
        <div className="headlines">
          <ul className="headlines">
            <li><a href="/">Home</a></li>
            <li><a href="/article-category">Category</a></li>
            <li><a href="/about-me">About</a></li>
            <li><a href="/contact">Contact</a></li>

          </ul>
        </div>

      </div>
    </div>
  )
}
