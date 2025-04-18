import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs'
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import './ChatInput.css'

function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }
    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]
    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingSpinnerImage} className="loading-spinner" />,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    setInputText("");

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
      }
    ]);

    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  function clearMessages() {
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input 
        className="chat-input"
        disabled={isLoading}
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <button className="send-button" onClick={sendMessage}>Send</button>
      <button className='clear-button' onClick={clearMessages}>Clear</button>
    </div>
  );
};

export default ChatInput