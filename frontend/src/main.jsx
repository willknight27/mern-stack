import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GamesContextProvider } from './context/GameContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GamesContextProvider>
      <App />
    </GamesContextProvider>
  </React.StrictMode>
)
