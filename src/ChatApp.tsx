import { ChatPopUp } from "@yext/chat-ui-react"
import { ChatHeadlessProvider } from "@yext/chat-headless-react";
import ReactDOM from 'react-dom';
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

function ChatApp({
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
        customCssClasses={{
          panel: "yext-chat-panel",
          panel__hidden: "yext-chat-panel__hidden",
          panel__display: "yext-chat-panel__display",
          panelCssClasses: {
            container: "yext-chat-panel__container",
            inputContainer: "yext-chat-panel__input-container",
            inputCssClasses: {
              container: "yext-chat-panel__input",
              textArea: "yext-chat-panel__input__text-area",
              sendButton: "yext-chat-panel__input__send-button",
            },
            messageBubbleCssClasses: {
              message: "yext-chat-panel__message-bubble",
              message__bot: "yext-chat-panel__message-bubble__bot",
              message__user: "yext-chat-panel__message-bubble__user",
              subContainer: "yext-chat-panel__message-bubble__sub-container",
              subContainer__bot: "yext-chat-panel__message-bubble__sub-container__bot",
              subContainer__user: "yext-chat-panel__message-bubble__sub-container__user",
              timestamp: "yext-chat-panel__message-bubble__timestamp",
              timestamp__bot: "yext-chat-panel__message-bubble__timestamp__bot",
              timestamp__user: "yext-chat-panel__message-bubble__timestamp__user",
              topContainer: "yext-chat-panel__message-bubble__top-container",
            }
          },
          button: "yext-chat-button",
          button__display: "yext-chat-button__display",
          button__hidden: "yext-chat-button__hidden",
          container: "yext-chat-container",
          headerCssClasses: {
            header: "yext-chat-header",
            closeButton: "yext-chat-header__close-button",
            restartButton: "yext-chat-header__restart-button",
            title: "yext-chat-header__title",
          }
        }}
      />
    </ChatHeadlessProvider>
  )
}

export default ChatApp

// Separate mount function
export function mountChatApp(el: HTMLElement, props: ScriptTagProps) {
  ReactDOM.render(<ChatApp {...props} />, el);
}