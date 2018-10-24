import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// To use this, you need to populate src/api.json
// apiKey : String (Dark Sky API Key)
// latitude: Number (Latitude of Location)
// longitude : Number (Longitude of Location)

import { apiKey, latitude, longitude } from '../api.json'

import {
  WEATHER_FETCH,
  WEATHER_UPDATE,
  WEATHER_LOADING,
  WEATHER_ERROR
} from '../actions/weather'

const DS_URL = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?units=si`

export function* fetchWeather () {
  yield put({type: WEATHER_LOADING})
  try {
    const response = yield axios.get(DS_URL)

    yield put({ type: WEATHER_UPDATE, payload: response.data })
  } catch (e) {
    put({ type: WEATHER_ERROR })
  }
}

export function* watchFetchWeather () {
  yield takeEvery(WEATHER_FETCH, fetchWeather)
}
