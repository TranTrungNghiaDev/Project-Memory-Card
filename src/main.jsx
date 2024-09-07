import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageList from './components/ImageList'
import "./styles/styles.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageList />
  </StrictMode>,
)
