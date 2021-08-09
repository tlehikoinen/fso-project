const testRouter = require('express').Router()
const Initial = require('../models/initial')

testRouter.get('/', async (req,res) => {
  const initials = await Initial.find({})
  console.log(initials)
  res.json(initials)
})

testRouter.post('/', async (req,res) => {
  const content = req.body
  const testContent = new Initial({
    content: content.message
  })
  try {
    const savedContent = await testContent.save()
    res.json(savedContent).end()
  } catch (e) {
    res.status(400)
  }
})

testRouter.delete('/:id', async (req,res) => {
  try {
    const dbRes = await Initial.findByIdAndDelete(req.params.id)

    if(!dbRes) {
      res.status(404).json({ Error: 'Not found' })
    } else {
      res.status(202).json( { Message: 'Deleted successfully' })  }
  } catch (e) {
    res.status(404).json( { Message: 'nope' })
  }
})

testRouter.delete('/', async (req,res) => {
  await Initial.deleteMany({})
  res.json('deleted')

})
module.exports = testRouter