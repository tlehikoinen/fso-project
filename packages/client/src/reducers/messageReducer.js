import messageService from '../services/messages'

const messageReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
  case 'REMOVE_MESSAGE': {
    state.messages = state.messages.filter(m => m._id !== action.id)
    return state
  }
  case 'SET_MESSAGE': {
    state.messages = state.messages.concat(action.message)
    return state
  }
  case 'SET_MESSAGES': {
    state.messages = action.messages
    console.log('state, ', state)
    return state
  }
  default:
    return state
  }
}

export const getMessagesFromServer = () => {
  return async dispatch => {
    const messages = await messageService.getAll()
    console.log('getmessagesfromserver', messages)
    dispatch(setMessages(messages))
  }
}

export const removeMessage = (id) => {
  return {
    type: 'REMOVE_MESSAGE',
    id: id
  }
}

export const setMessage = (message) => {
  return {
    type: 'SET_MESSAGE',
    message
  }
}

export const setMessages = (messages) => {
  console.log('setmessages', messages)
  return {
    type: 'SET_MESSAGES',
    messages
  }
}


export default messageReducer