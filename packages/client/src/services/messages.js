import axios from 'axios'
const baseUrl = '/api/test'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}

const addMessage = async ( message ) => {
  const response = await axios.post(baseUrl, { message: message })
  return response
}

const deleteMessage = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response
}

const exports = { addMessage, deleteMessage, getAll }

export default exports