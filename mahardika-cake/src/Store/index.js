import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  Cake: [],
  CakeId: {},
  loading: true,
}

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'FETCHCAKE':
      return { ...state, Cake: payload }
    case 'CAKEBYID':
      return { ...state, CakeId: payload, loading: false }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
