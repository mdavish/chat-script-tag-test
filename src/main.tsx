import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatApp from './ChatApp.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChatApp
      apiKey="ba41c60c65d874c5340985ad4fcda69a"
      botId='ski-warehouse-chat'
      title='Ski Warehouse'
      stream={false}
    />
  </React.StrictMode>,
)
