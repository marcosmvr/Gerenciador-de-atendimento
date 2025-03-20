import express from 'express'
const app = express()
const port = 3000

app.listen(3000, error => {
  if (error) {
    console.log('Deu erro')
    return
  }
  console.log('Rodando na porta 3000')
})
