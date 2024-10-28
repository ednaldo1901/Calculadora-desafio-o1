import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyle from './gobalStyled'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App/>
  </StrictMode>,
)
