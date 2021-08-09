const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Initial = require('../models/initial')
const initialContent = [
  {
    content: 'Eka rivi'
  },
  {
    content: 'Toka rivi'
  }
]

beforeEach(async () => {
  await Initial.deleteMany({})
  let testRow = new Initial(initialContent[0])
  await testRow.save()
  testRow = new Initial(initialContent[1])
  await testRow.save()

})
test('page returns json', async () => {
  await api
    .get('/api/test')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
test('Page contains initial content', async () => {
  const response = await api.get('/api/test')
  const contents = response.body.map(c => c.content)
  expect(contents).toContain('Eka rivi')
})
test('New message is saved', async () => {
  const message = { message: 'uusi viesti' }
  await api
    .post('/api/test')
    .send(message)
    .expect(200)
  const response = await api.get('/api/test')
  const contents = response.body.map(c => c.content)
  expect(contents).toContain('uusi viesti')
})

afterAll(() => {
  mongoose.connection.close()
})