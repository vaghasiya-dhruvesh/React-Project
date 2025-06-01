import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL); // getting access of environment variable

  return (
    <>
      <h1>Blog website with Appwrite</h1>
    </>
  )
}

export default App
