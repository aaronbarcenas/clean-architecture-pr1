
const express = require('express')
const router = express.Router()
const users = require('../usecases/users')

router.post('/', async ( req, res ) => {
  try {
    const newUser = await users.signUp(req.body)
    res.json({ 
      success: true,
      message: 'User registered',
      data: { user: newUser }
    })
  } catch ( error ) {
    res.status(400)
    res.json({ 
      success: false,
      message: 'Could not register',
      error: error.message
    })
  }
})

router.get('/', async ( req, res ) => {
  try{
    const allUsers = await users.getAll()
    res.json({ 
      success: true,
      message: 'Get all users',
      data: { users: allUsers }
    })
  } catch ( error ) {
    res.status(400)
    res.json({ 
      success: false,
      message: 'Could not get users',
      error: error.message
    })
  }
})

router.post('/login', async ( req, res ) => {
  try{
    const { email, password } = req.body
    const token = await users.login(email, password)
    res.json({ 
      success: true,
      message: 'Logged in',
      data: { token }
    })
  } catch ( error ) {
    res.status(400)
    res.json({ 
      success: false,
      message: 'Could not log in',
      error: error.message
    })
  }
})

module.exports = router