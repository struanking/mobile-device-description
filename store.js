import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import thunkMiddleware from 'redux-thunk'
import mockdata from './mockdata'

// const middlewares = [thunkMiddleware];
const middlewares = [apiMiddleware];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

// TODO add combineReducers
export const searchResultsReducer = (state = { devices: mockdata }, action) => {
  switch (action.type) {
    case 'ADD':
      return [ ...action.payload ]
    case 'CLEAR':
      return []
    case 'SEARCH_REQUEST':
      return {
        devices: mockdata
      }
    case 'DEVICE_SUCCESS':
      return {
        devices: action.payload
      }
    default: return state
  }
}

// export const startClock = () => dispatch => {
//   return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
// }

export const initStore = (initialState) => {
  return createStore(searchResultsReducer, initialState, applyMiddleware(...middlewares))
}
