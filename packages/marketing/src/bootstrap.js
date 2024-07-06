import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = (el) => {
    ReactDOM.render(<App />, el)
}

// Running the application standalone
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#marketing-dev-root')
    if (el) { // This check is needed as this element won't exist in the host/container app
        mount(el)
    }
}

// Running the application through container
export { mount }