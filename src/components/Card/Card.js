import React from 'react'
import './Card.css'

import star from '../../images/Star.png'

const Card = (props) => {
 console.log(props)
  return (
<>
    <div className='card'>
      <img className='card--img' src={`../../images/${props.coverImg}`}></img>
      <div className='card--stats'>
        <img src={star} className='.card-star'></img>
       <span>{props.stats.rating}</span>
       <span className='gray'>{props.stats.reviewCount}</span>
       <span className='gray'>{props.Location}</span>
      </div>
      <p className='card--title'>{props.title}</p>
      <p className='card--price'>From ${props.price}</p>

      </div>
      </>
    
    
  )
}

export default Card