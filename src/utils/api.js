import 'whatwg-fetch'

export default (type, state) => {
  const root = window.location.host

  const url = `http://${root}/${type}/${state}`

  console.log(url)

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'appliction/json',
      'Content-Type': 'application/json'
    }
  }

  return fetch(url, options)
    .then(res => res.json())
}
