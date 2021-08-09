const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const initialRouter = require('./controllers/initial')
const healthRouter = require('./controllers/health')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const path = require('path')

app.use(cors())
app.use(express.json())
app.use('/api/test', initialRouter)
app.use('/health', healthRouter)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('build'))

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')))
}

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  // eslint-disable-next-line no-unused-vars
  .then(result => {
    logger.info('Connected to MongoDB')
  })
  // eslint-disable-next-line no-unused-vars
  .catch(error => {
    logger.error('Error Connecting to MongoDB')
  })

module.exports = app