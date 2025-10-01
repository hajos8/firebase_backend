import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dogs from './Dogs'

function App() {
  const [count, setCount] = useState(0)

  const dogInstance = <Dogs/>

  return (
    <>
      {dogInstance}
    </>
  )
}

export default App
