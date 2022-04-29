const express = require('express')
const { DateTime } = require('luxon')
const app = express()
const port = 11387

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/time', (req, res) => {
  let now = DateTime.now().toISO();
  res.send(now)
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log(`Example app listening on port ${port}`)
  }
})