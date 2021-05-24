
const express = require('express')
const router = express.Router()
const koders = require('../usecases/koders')

router.get('/', async (req, res ) => {

  try {
    const allKoders = await koders.getAll()
    res.json({
      success: true,
      message: 'get All Koders...',
      data: {
        koders: allKoders
      }
    })
  } catch ( error ){
    res.status(400)
    res.json({
      success: false,
      message: 'Error at gel All Koders...',
      error: error.message
    })
  }
})

router.post('/', async ( req, res ) => {

  try {
    const koderCreated = await koders.create( req.body )

    res.json({
      message: 'koder creado...',
      success: true,
      date: {
        koder: koderCreated
      }
    })
  } catch ( error ) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.delete('/:id', async ( req, res ) => {
  try {
    const { id } = req.params
    const koderDB = await koders.deleteById( id )

    koderDB ? 
      res.json({ estado: true, mensaje: 'koder eliminado'}) : 
        res.json({ estado: false, mensaje: 'Fallo al eliminar!!!'})
  } catch ( error ) {
    console.log( error )
  }
})

router.patch('/:id', async ( req, res ) => {
  try{
    const { id } = req.params
    const koderData = req.body
    const mentorUpdated = await koders.updateById( id, koderData )
    res.json({ 
      success: true, 
      message: 'Udated Koder...',
      data: { 
        koderData
      }
    })
  } catch ( error ) {
    res.status(400).json({
      success: false,
      message: 'Error at uodate koder...',
      data: error.message
    })
  }
})


module.exports = router