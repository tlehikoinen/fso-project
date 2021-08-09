const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  content: String
})

module.exports = mongoose.model('Test', testSchema)