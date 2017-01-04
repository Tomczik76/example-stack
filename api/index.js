const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.json())


const users = []

app.post('/signup',  function (req, res) {
  console.log(`Saved user ${JSON.stringify(req.body)}`)
  users.push(req.body)

  res.sendStatus(200)
})

app.get('/users', function (req, res) {
    res.send(JSON.stringify(users))
})

app.listen(3030)