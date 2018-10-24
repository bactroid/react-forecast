import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { watchFetchWeather } from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(watchFetchWeather)

  return store
}
