import React from 'react'
import './index.css'

const Card = (props) => {
    console.log(props.ship);
  return (
    <div id='rectangle'>{props.ship}</div>
  )
}



export default Card