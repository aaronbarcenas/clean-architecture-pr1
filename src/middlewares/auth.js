const jwt = require('../lib/jwt');
const users = require('../usecases/users')

function auth(req, res, next) {
  try {
    const {
      authorization: token
    } = req.headers
    console.log('token: ', token)
    const isValidToken = jwt.verify(token)
    if (!isValidToken) {
      throw new Error('Not Authorized')
    }
    next()
  } catch ( error ) {
    res.status(401)
    res.json({
      success: false,
      meesssage: 'not Authorized',
      error: error.message
    })
  }
}

// funcion para determinar que roles estan autorizados para pasar el middleware..
function authRoles ( allowedRoles ) {
  return async ( req, res, next ) => {
    try {

      const {
        authorization: token
      } = req.headers
      //console.log('token: ', token)
      const isValidToken = jwt.verify(token)
      if (!isValidToken) {
        throw new Error('Not Authorized')
      }
      const userFound = await users.getById(isValidToken.id)

      const userRoles = userFound.role || []

      const isAllowedRole = userRoles.find( userRole => {
        return allowedRoles.find( allowedRole => userRole === allowedRole)
      })

      if ( !isAllowedRole ) {
        throw new Error('Insufficient permissions')
      }

      next()

    } catch ( error ) {
      res.status(401)
      res.json({
        success: false,
        meesssage: 'not Authorized',
        error: error.message
      })
    }
  }
}

module.exports = {
  auth,
  authRoles
}