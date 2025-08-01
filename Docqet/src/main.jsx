import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import DoctorAppContextProvider from './context/DoctorAppContexts.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DoctorAppContextProvider>
      <App />

    </DoctorAppContextProvider>
    
  </BrowserRouter>,
)

