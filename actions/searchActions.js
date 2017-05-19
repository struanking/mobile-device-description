// import { createAction } from 'redux-actions';
import { CALL_API } from 'redux-api-middleware';
import API from '../config';

// export const SEARCH_REQUEST = 'SEARCH_REQUEST'
// export const searchRequest = createAction(SEARCH_REQUEST)

const getDevice = (props) => {
  const { brand, device } = props
  let endpoint = `${API.BASE_URL}getdevice?token=${API.TOKEN}&device=${device}`

  if (brand) {
    endpoint = `${endpoint}&brand=${brand}`
  }

  return endpoint
}


export const searchByBrandAndDevice = (props) => ({
  [CALL_API]: {
    endpoint: getDevice(props),
    method: 'GET',
    types: ['DEVICE_REQUEST', 'DEVICE_SUCCESS', 'DEVICE_FAILURE']
  }
})

const getLatest = (props) => {
  const { brand, limit } = props
  let endpoint = `${API.BASE_URL}getlatest?token=${API.TOKEN}`

  if (brand) {
    endpoint = `${endpoint}&brand=${brand}`
  }

  if (limit) {
    endpoint = `${endpoint}&limit=${limit}`
  }

  return endpoint
}

export const searchByLatest = (props) => ({
  [CALL_API]: {
    endpoint: getLatest(props),
    method: 'GET',
    types: ['LATEST_REQUEST', 'LATEST_SUCCESS', 'LATEST_FAILURE']
  }
})
