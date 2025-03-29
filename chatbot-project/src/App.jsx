import { useState, useEffect } from 'react'
import{ Chatbot } from 'supersimpledev'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'


function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [{
    message: 'hello',
    sender: 'user',
    id: 'id1',
  }]);
  //const chatMessages = array[0];
  //const setChatMessages = array[1];
  //Array destruction.
  //const [chatMessages, setChatMessages] = array; instead of using this and const useState as array, we can put the state and set state straight inside an array just as used above
 
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID}`
      }
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App