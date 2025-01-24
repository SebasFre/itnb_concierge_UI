"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp?: string
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm ITNB's AI assistant. How can I help you today?",
      timestamp: "15:58:12"
    }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    
    setMessages(prev => [...prev, { role: "user", content: input.trim() }])
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#1a1a1a]">
      <CardContent className="flex-1 overflow-y-auto p-6 pb-24">
        <div className="space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-4 py-2 ${
                  message.role === "user"
                    ? "bg-[#1e3fec] text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  {message.role === "assistant" && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1e3fec]">
                      <span className="text-xs font-medium text-white">AI</span>
                    </div>
                  )}
                  {message.timestamp && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">{message.timestamp}</span>
                  )}
                </div>
                <p className="mt-1">{message.content}</p>
                {message.role === "assistant" && (
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                      Helpful
                    </button>
                    <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                      Not helpful
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#1a1a1a]">
        <div className="flex w-full items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about ITNB AG..."
            className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-900 transition-colors focus:border-[#1e3fec] focus:outline-none focus:ring-1 focus:ring-[#1e3fec] dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e3fec] text-white transition-colors hover:bg-[#1e3fec]/90 disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </CardFooter>
    </Card>
  )
} 