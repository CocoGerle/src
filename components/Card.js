import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src="https://www.w3schools.com/css/paris.jpg" alt='' ></img>
        </div>
        <div className='card-content'>
            <h1>Title</h1>
        </div>
        <div className='card-body'>
            <p>Write paragraph here</p>
        </div>
        <div className='card-button'>
            <button>view more</button>
        </div>
    </div>
  )
}

export default Card