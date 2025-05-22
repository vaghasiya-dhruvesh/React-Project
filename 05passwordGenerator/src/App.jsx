import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("D#ruve$h");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"

    if (charAllowed) str += "!@#$%^&*()~-+_{}[]"

    for (let i = 1; i < length; i++)
    {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  // function to copy the password when button is click
  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select();  // from this line, text is auto selected when button is click
    // passwordRef.current?.setSelectionRange(0, 100);  // optionally we can give particular range to copy the text
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center m-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordClipboard} className='outline-none shrink py-0.5 px-3 text-white bg-blue-700'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numerInput"
              onChange={() => {
                setCharAllowed((prev) => !prev) // here we can access previous value
              }} />
            <label htmlFor="characterInput">Characters
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
