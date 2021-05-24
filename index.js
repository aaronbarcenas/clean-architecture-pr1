
const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
  .then(() => {
    console.log('DB connected')
    server.listen(8080, () => {
      console.log('server is listening')
    })
  })
  .catch(( error ) => {
    console.error('DB connection error: ', error)
  })

// get /koders
// 1. Crear o asegurar de que exista el modelo necesario...
// 2. Crear el caso de uso necesario
// 3. Crear el endpoint necesario...

/* 
  Practica: 
    - Post /Koders
    - Delete /koders/:id koders.findByIDANdDELETE()

    */