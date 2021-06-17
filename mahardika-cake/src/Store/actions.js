export function fetchCake(payload) {
  return { type: 'FETCHCAKE', payload }
}

export function getCakeById(payload) {
  console.log(payload, 'diaction atas')
  return { type: 'CAKEBYID', payload }
}

export function CakeFetch() {
  return async (dispatch) => {
    try {
      const response = await fetch(' http://localhost:3000/Cake')
      const data = await response.json()
      console.log(data, 'ini di data')
      dispatch(fetchCake(data))
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function CakeById(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/Cake/${id}`)
      const data = await response.json()
      console.log(id, 'di action')
      console.log(data, 'ini di data by id')
      dispatch(getCakeById(data))
    } catch (err) {
      console.log(err.message)
    }
  }
}
