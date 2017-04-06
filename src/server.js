import express from 'express'
import request from 'request'
import {resolve} from 'path'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
const app = express()

app.use(cors())
app.use(express.static(resolve(__dirname, '../dist')))

app.get('/', function (req, res) {
  res.sendFile(resolve(__dirname, '../dist/index.html'))
})

app.get('/representatives/:state',
  findRepresentativesByState,
  jsonResponse
)

app.get('/senators/:state',
  findSenatorsByState,
  jsonResponse
)

function findRepresentativesByState (req, res, next) {
  const url = `http://whoismyrepresentative.com/getall_reps_bystate.php?state=${req.params.state}&output=json`
  request(url, handleApiResponse(res, next))
}

function findSenatorsByState (req, res, next) {
  const url = `http://whoismyrepresentative.com/getall_sens_bystate.php?state=${req.params.state}&output=json`
  request(url, handleApiResponse(res, next))
}

function handleApiResponse (res, next) {
  return (err, response, body) => {
    if (err || body[0] === '<') {
      res.locals = {
        success: false,
        error: err || 'Invalid request. Please check your state variable.'
      }
      return next()
    }
    res.locals = {
      success: true,
      results: JSON.parse(body).results
    }
    return next()
  }
}

function jsonResponse (req, res, next) {
  return res.json(res.locals)
}

const server = app.listen(8000, () => {
  const host = server.address().address,
    port = server.address().port

  console.log('API listening at http://%s:%s', host, port)
})
