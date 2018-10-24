import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from './logo.svg'
import './App.css'
import { fetchWeather } from './actions/weather'
import WeatherContainer from './components/WeatherContainer'

class App extends Component {
  componentDidMount () {
    this.props.fetchWeather()
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <WeatherContainer data={this.props.weather} />
        </header>
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
})

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
