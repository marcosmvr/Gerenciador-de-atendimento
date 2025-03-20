const { Router } = require('express')
const router = Router()
const AtendimentoController = require('../controllers/atendimentoController')

router.get('/atendimentos', (req, res) => {
  res.send('Chegou aqui, estamos listando todos os atendimentos...')
})

router.post('/atendimentos', (req, res) => {
  res.send('Chegou aqui, estamos criando um novo atendimento')
})

router.put('/atendimento/:id', (req, res) => {
  const { id } = req.params
  res.send(`Chegou aqui, estamos atualizando o atendimento ${id}`)
})

router.delete('/atendimento/:id', (req, res) => {
  const { id } = req.params
  res.send(`Chegou aqui, estamos deletando um atendimento ${id}`)
})

module.exports = router
