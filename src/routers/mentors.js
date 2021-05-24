const express = require('express')
const router = express.Router()
const mentors = require('../usecases/mentors')

router.get('/', async (req, res) => {
  try {
    const allMentors = await mentors.getAll()
    res.json({
      success: true,
      message: 'get all Mentors...',
      data: {
        mentors: allMentors
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at gel All Mentors...',
      error: error.message
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const mentorCreated = await mentors.create(req.body)

    res.json({
      message: 'Mentor creado...',
      success: true,
      date: {
        mentor: mentorCreated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params
    const mentorDB = await mentors.deleteById(id)

    mentorDB ?
      res.json({
        success: true,
        message: 'Mentor eliminado...'
      }) :
      res.json({
        success: true,
        message: 'Fallo al eliminar!!!'
      })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.patch('/:id', async ( req, res ) => {
  try {
    const { id } = req.params;
    const updatedData = req.body
    const updatedMentor = await mentors.updateById(id, updatedData);
    res.json({
      success: true,
      message: 'Updated mentor...',
      data: {
        updatedMentor
      }
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error at uodate mentor...',
      data: error.message
    })
  }
})

module.exports = router