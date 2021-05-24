
// Este archivo aloja la definicion de nuestro servidor...
const { json } = require('express')
const express = require('express')
const kodersRouters = require('./routers/koders')
const mentorsRouters = require('./routers/mentors')
const app = express()

app.use(express.json())

app.use('/koders', kodersRouters)
app.use('/mentors', mentorsRouters)



module.exports = app