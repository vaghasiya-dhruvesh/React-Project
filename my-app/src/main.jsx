import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <>
            <h1>Custom App</h1>
        </>
    )
}

const anotherUser = "dhruv"

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me   ',
    anotherUser     // we can also attached variable here
)

createRoot(document.getElementById('root')).
    render(
        // <MyApp />
        reactElement   // this element gives output
        // <App />
        // MyApp() // We can also write like this
    )
