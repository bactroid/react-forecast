import { path, compose, map } from 'ramda'
import moment from 'moment'

import {
  WEATHER_UPDATE,
  WEATHER_LOADING,
  WEATHER_ERROR
} from '../actions/weather'

const initialState = {
  temperatures: [],
  loading: false,
  error: false
}

const dailyDataToTempAndDate = dailyObj => ({
  date: moment.unix(dailyObj.time).format('MMM D'),
  temperature: Math.round(dailyObj.temperatureHigh)
})

const transformWeatherResponse = compose(
  map(dailyDataToTempAndDate),
  path(['daily', 'data'])
)

export default (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_UPDATE:
      return {
        ...state,
        loading: false,
        temperatures: transformWeatherResponse(action.payload)
      }
    case WEATHER_LOADING:
      return { ...state, loading: true }
    case WEATHER_ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}
