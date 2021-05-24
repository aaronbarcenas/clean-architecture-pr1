
const mongoose = require('mongoose')

const koderschema = new mongoose.Schema({
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
  }
})

const model = mongoose.model('koders', koderschema )

module.exports = model