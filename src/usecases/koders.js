
// endpoint --> caso de uso --> modelo

const Koders = require('../models/koders')

function getAll () {
  return Koders.find()
}

function create ({ name, lastName, age, gender }) {
  return Koders.create({ name, lastName, age, gender })
}

function deleteById ( id ) {
  return Koders.findByIdAndDelete( id )
}

function updateById ( id, dataToUpdate ) {
  return Koders.findByIdAndUpdate( id, dataToUpdate )
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}