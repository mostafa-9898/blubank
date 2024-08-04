import React from 'react'
import ReactDOM from 'react-dom/client'

// Style
import './index.css'

// Components
import App from './App.tsx'

// Router
import { BrowserRouter } from 'react-router-dom'

// Context

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
