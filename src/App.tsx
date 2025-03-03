import { useState } from 'react'
import { X, MessageCircle, Send } from 'lucide-react'

interface Message {
  text: string
  isUser: boolean
}

function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isUser: true }])
      setInputMessage('')
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed border-0 outline-0 bottom-4 right-4 bg-blue-600 text-white rounded-full   w-12 h-12  shadow-lg hover:bg-blue-700 transition-colors z-10"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
      <div
        className={`fixed bottom-20 right-4 flex flex-col h-[500px] shadow-[0_0_15px_rgba(0,0,0,0.1)] w-full max-w-md bg-white rounded-3xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${message.isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      

      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputMessage(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 border-0 outline-0 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
