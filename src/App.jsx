import { useState } from 'react'

import './App.css'
import Chat from './components/Chat'
import SignIn from './components/signIn'
import SignUp from './components/signUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <SignIn/>
     <SignUp/>
     <Chat/>
    </div>
  )
}

export default App
