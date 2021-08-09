import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import messageService from '../services/messages'
import { setMessage } from '../reducers/messageReducer'

const Messages = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages.messages)
  const [ newMessage, setNewMessage ] = useState('')

  const handleInputChange = (event) => {
    setNewMessage(event.target.value)
  }
  const sendNewMessage = async (event) => {
    event.preventDefault()
    const response = await messageService.addMessage(newMessage)
    if (response.status === 200) {
      dispatch(setMessage(response.data))
      setNewMessage('')
    }
  }

  if (!messages) {
    return (<>Loading...</>)
  }

  return (
    <>
      <h2>Message header</h2>
      {messages.map(m => <Message key={m._id} message={m} />)}
      <div>
        <form onSubmit={(event) => sendNewMessage(event)}>
          <input type="text" value={newMessage} onChange={handleInputChange}></input> <button type="submit">submit</button>
        </form>
      </div>
    </>
  )
}


export default Messages