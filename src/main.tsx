import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App
      apiKey="ba41c60c65d874c5340985ad4fcda69a"
      botId='ski-warehouse-chat'
      title='Ski Warehouse'
      stream={false}
    />
  </React.StrictMode>,
)
