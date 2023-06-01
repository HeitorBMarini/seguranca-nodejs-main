const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')

const usuario = require('./usuariosRoute')
const usuarios = require('../models/usuarios')

module.exports = app => {
  app.use(
    bodyParser.json(),
    produto,
    usuario
  )
}
