import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from './logo.svg'
import './App.css'
import { fetchWeather } from './actions/weather'
import WeatherDisplay from './components/WeatherDisplay'

class App extends Component {
  componentDidMount () {
    this.props.fetchWeather()
  }

  renderWeatherDisplay (weatherData) {
    return (
      <WeatherDisplay key={weatherData.date} date={weatherData.date} temperature={weatherData.temperature} />
    )
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Upcoming Weather</h1>
          <div className='weather-container'>
            {this.props.weather.temperatures.map(this.renderWeatherDisplay)}
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
