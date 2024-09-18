import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PlayerController } from './hooks/usePlayer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayerController>
    <App />
    </PlayerController>
  </React.StrictMode>
)
