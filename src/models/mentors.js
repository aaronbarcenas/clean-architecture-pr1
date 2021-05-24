const mongoose = require('mongoose')

const mentorsSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true
  },
  lastName : {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true
  },
  age: {
    type: Number,
    min: 0,
    max: 150,
    required: true
  },
  gender: {
    type: String,
    enum: [ 'm', 'f'],
    required: true
  },
  modulo: {
    type: String,
    enum: [ 'front', 'back', 'cloud', 'react' ],
    required: true
  }
})

const model = mongoose.model('mentors', mentorsSchema)

module.exports = model
