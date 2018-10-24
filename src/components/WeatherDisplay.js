import React from 'react'
import './WeatherDisplay.css'

const WeatherDisplay = props => (
  <div className='weather-item'>
    <div className='date'>{props.date}</div>
    <div className='temperature'>{props.temperature} °C</div>
  </div>
)

export default WeatherDisplay
