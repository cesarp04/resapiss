const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

// conectar mongo 
mongoose.Promise = global.Promise
mongoose.connect('mongodn://localhost/restapis',{
  useNewUrlParser: true,
})

// crear el servidor
const app = express()

// rutas de la app
app.use('/',routes())

// puerto
app.listen(5000)