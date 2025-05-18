import { useState } from 'react'
import Card from './component/NewCard'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "dhruvesh"
  }
  return (
    <>
      <h1 className='bg-green-400  text-black p-4 rounded-xl'>Tailwind Project</h1>
      {/* <Card channel="dhruvesh" someObj={myObj} />      <- here we pass the props*/}
      <Card username="dhruvesh" btnText="add" />
      {/* <Card username="dhruv" btnText="delete" /> */}
      <Card username="dhruv"  />  {/** if anyone does not pass the value for button then we also mention default value */}
    </>
  )
}

export default App
