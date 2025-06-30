import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Importamos el TaskContext
import { TaskContextProvider } from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Englobamos */}
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>,
)
