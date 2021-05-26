
// Este archivo aloja la definicion de nuestro servidor...
const { json } = require('express')
const express = require('express')
const cors = require('cors')
const usersRouter = require('./routers/users')
const kodersRouters = require('./routers/koders')
const mentorsRouters = require('./routers/mentors')
const app = express()
const logger = require('./middlewares/logger')

app.use(cors())
app.use(express.json())

app.use(logger)
app.use('/koders', kodersRouters)
app.use('/mentors', mentorsRouters)
app.use('/users', usersRouter)



module.exports = app