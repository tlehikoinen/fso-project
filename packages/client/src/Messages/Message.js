import React from 'react'
import messageService from '../services/messages'
import { useDispatch } from 'react-redux'
import { removeMessage } from '../reducers/messageReducer'
import PropTypes from 'prop-types'

const Message = ( { message }) => {
  const dispatch = useDispatch()

  const deleteMessage = async id => {
    const response = await messageService.deleteMessage(id)
    if (response.status === 202) {
      dispatch(removeMessage(id))
    }
  }
  return (
    <div>
      {message.content} <button onClick={() => deleteMessage(message._id)}>delete</button>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.string
}

export default Message