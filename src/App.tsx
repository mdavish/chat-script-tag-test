import { ChatPopUp } from "@yext/chat-ui-react"
import { ChatHeadlessProvider } from "@yext/chat-headless-react";
import "@yext/chat-ui-react/bundle.css";

export interface ScriptTagProps {
  apiKey: string;
  botId: string;
  title: string;
  saveToSessionStorage?: boolean;
  placeholder?: string;
  showRestartButton?: boolean;
  stream?: boolean;
}

function App({
  apiKey,
  botId,
  title,
  saveToSessionStorage = false,
  placeholder = "Type a message...",
  showRestartButton = false,
  stream = true,
}: ScriptTagProps) {
  return (
    <ChatHeadlessProvider
      config={{
        saveToSessionStorage,
        botId,
        apiKey,
      }}
    >
      <ChatPopUp
        title={title}
        placeholder={placeholder}
        showRestartButton={showRestartButton}
        stream={stream}
      />
    </ChatHeadlessProvider>
  )
}

export default App
