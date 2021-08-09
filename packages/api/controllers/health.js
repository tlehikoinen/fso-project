const healthRouter = require('express').Router()

healthRouter.get('/', (req,res) => {
  res.send('so')
})

module.exports = healthRouter