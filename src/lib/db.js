const mongoose = require('mongoose')

const DB_USER = 'aaron'
const DB_PASSWORD = 'hfo045no'
const DB_HOST = 'novena-gen.fllyd.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
  return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connect