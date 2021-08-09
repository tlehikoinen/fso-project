import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import Messages from './Messages'
import Home from './Home'
import { useDispatch } from 'react-redux'
import { getMessagesFromServer } from './reducers/messageReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessagesFromServer())
  }, [dispatch])

  return (
    <Router>
      <div>
        <Link style={{ padding: '10px' }} to='/'>home</Link>
        <Link style={{ padding: '10px' }} to='/Messages'>messages</Link>
      </div>

      <Switch>
        <Route path='/Messages' exact>
          <Messages />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App