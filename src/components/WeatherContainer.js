import React from 'react'
import WeatherDisplay from './WeatherDisplay'
import WeatherError from './WeatherError.js'
import WeatherLoading from './WeatherLoading'
import './WeatherContainer.css'

const renderWeatherData = data => (
  <WeatherDisplay key={data.date} date={data.date} temperature={data.temperature} />
)

const chooseDisplay = props => {
  if (props.data.loading) {
    return <WeatherLoading />
  } else if (props.data.error) {
    return <WeatherError />
  } else {
    return props.data.temperatures.map(renderWeatherData)
  }
}

const WeatherContainer = props => (
  <div>
    <h1>Upcoming Weather</h1>
    <div className='weather-container'>
      { chooseDisplay(props) }
    </div>
  </div>
)

export default WeatherContainer
