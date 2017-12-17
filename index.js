const express = require('express')
const app = express()
const serverSideRender = require('./server-app')

app.set('view engine', 'pug')

app.get('/client-app.js', (req, res) => res.sendFile(`${__dirname}/client-app.js`))

app.get('/', serverSideRender)

app.listen(3001, () => console.log('Example app listening on port 3001!'))
