import { complementedHash, API_URL } from './season'

function getApiAccount (resource = 'characters?', data) {
  if (data) {
    return fetch(`${API_URL}${resource}name=${data}${complementedHash}`, {
      mode: 'cors'
    })
  } else {
    return fetch(`${API_URL}${resource}${complementedHash}`, {
      mode: 'cors'
    })
  }
}

function getComics (characterId) {
  return fetch(`${API_URL}characters/${characterId}/comics?${complementedHash}`, {
    mode: 'cors'
  })
}

export {
  getApiAccount,
  getComics
}
