import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import Header from './User/components/Header.jsx'
// import Footer from './User/components/Footer.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import SharedContext from './contextApi/SharedContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='1011222538882-hs4ivrm8o0egnat435d4pqibo1slq8ev.apps.googleusercontent.com'>
        <SharedContext>
          <App />
        </SharedContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
