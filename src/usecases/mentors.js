
const Mentors = require('../models/mentors')

function getAll () {
  return Mentors.find()
}

function create ({ name, lastName, age, gender, modulo }) {
  return Mentors.create({ name, lastName, age, gender, modulo })
}

function deleteById ( id ) {
  return Mentors.findByIdAndDelete( id )
}

function updateById ( id, dataToUpdate ) {
  return Mentors.findByIdAndUpdate( id, dataToUpdate )
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}