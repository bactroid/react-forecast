import React from 'react'

const WeatherError = props => (
  <div className='weather-error'>
    We're having trouble loading the weather data. This might be because of a bad Internet connection. Please verify that you're connected to the internet and then refresh your browser to retry.
  </div>
)

export default WeatherError
