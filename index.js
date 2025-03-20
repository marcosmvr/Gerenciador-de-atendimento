const express = require('express')
const router = require('./routers/index')
const app = express()
const port = 3000
const connection = require('./config/db')
const tabelas = require('./config/atendimento')

tabelas.init(connection)

router(app)

app.listen(port, error => {
  if (error) {
    console.log('Deu erro')
    return
  }
  console.log('Rodando na porta 3000')
})
