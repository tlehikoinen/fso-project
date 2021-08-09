import { createStore, combineReducers, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import messageReducer from './reducers/messageReducer'

const reducer = combineReducers({
  messages: messageReducer
})

const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store