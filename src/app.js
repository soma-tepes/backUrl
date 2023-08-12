const express = require('express')
const route = require('./routes/url.routes')
const app = express()

app.use(express.json())
app.use('/api/v1/url',route)
module.exports = app