const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()

app.use(cookieParser())

app.get('/', function (req, res) {
  res.send('Hello World')
  res.cookie('demo','Athrudev')
  console.log('Listening on the port localhost:3000')
})

app.listen(3000)