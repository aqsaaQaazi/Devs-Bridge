import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-gradient-to-bl from-cyan-800 to-green-300 px-0 py-0 bg-opacity-75">
      <App />
    </div>
  </StrictMode>,

  
)
