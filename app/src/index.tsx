import { createRoot } from 'react-dom/client'

import { App } from './App'

const container = document.getElementById(`single-spa-application:app`)

if (!container) {
	throw new Error(`container is not defined`)
}

const root = createRoot(container)

root.render(<App />)
