import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@yext/search-ui-react/bundle.css";
import { ChatHeadlessProvider } from '@yext/chat-headless-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChatHeadlessProvider
      config={{
        botId: "ski-warehouse-chat",
        apiKey: "ba41c60c65d874c5340985ad4fcda69a",
      }}
    >
      <App />
    </ChatHeadlessProvider>
  </React.StrictMode>,
)
