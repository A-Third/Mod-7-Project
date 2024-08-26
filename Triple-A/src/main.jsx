import ArtProvider from '../context/ArtProvider.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ArtProvider>
      <App />
    </ArtProvider>
  </BrowserRouter>
)
