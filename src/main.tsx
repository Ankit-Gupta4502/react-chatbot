import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
const createElement = () =>{
  const elm = document.createElement('div')
  elm.className = "chatbot-container "
  document.body.appendChild(elm)
  return elm
}

createRoot(createElement()).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
