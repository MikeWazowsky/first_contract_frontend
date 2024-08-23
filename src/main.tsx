import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

const manifestUrl = "https://f87d-188-116-40-79.ngrok-free.app/manifest.json";

createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)
