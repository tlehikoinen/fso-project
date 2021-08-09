//require('dotenv').config()
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.join(__dirname,'../../..','.env'),
})


const PORT = process.env.PORT
const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {
  PORT,
  MONGODB_URI
}