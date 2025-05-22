import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(6)

  const addVal = () => {
    if (counter < 20) setCounter(counter + 1);
  }

  const removeVal = () => {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>Welcome to react hooks</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addVal}>Add Value</button>
      <br /><br />
      <button onClick={removeVal}>Remove Value</button>
    </>
  )
}

export default App
