import React, { useState } from 'react'
import { FaComments, FaPaperPlane } from 'react-icons/fa'

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message])
      setMessage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={toggleChat}
        className="btn-chat text-white rounded-full shadow-lg transition-transform transform hover:scale-110 animate-bounce"
      >
        <FaComments size={28} className="chat-icon" />
      </button>

      {isOpen && (
        <div className="chat-box p-4 mt-2 border border-gray-300">
          <h2 className="font-semibold text-white">Chat with us!</h2>
          <div className="mt-2">
            <p className="text-sm  text-white">How can we help you today?</p>
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className="message mb-2">
                  {msg}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="border rounded p-1 flex-grow"
              style={{ fontSize: '14px' }}
            />
            <button
              onClick={handleSendMessage}
              className="btn-clear rounded-full flex items-center justify-center"
              style={{ width: '36px', height: '36px' }}
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
