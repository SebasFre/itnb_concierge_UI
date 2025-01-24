"use client"

import { useState, useRef, useEffect } from "react"
import { Send, ArrowDown, ArrowRight, Paperclip, Upload } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { FileUpload } from "./file-upload"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp?: string
  file?: {
    name: string
    size: number
  }
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [showUpload, setShowUpload] = useState(false)
  const [enterToSend, setEnterToSend] = useState(true)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isDraggingGlobal, setIsDraggingGlobal] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      const newHeight = Math.min(textarea.scrollHeight, 150) // Max height of 150px
      textarea.style.height = `${newHeight}px`
    }
  }, [input])

  const handleSend = () => {
    if (!input.trim() && !selectedFile) return
    
    const newMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }

    if (selectedFile) {
      newMessage.file = {
        name: selectedFile.name,
        size: selectedFile.size
      }
    }
    
    setMessages(prev => [...prev, newMessage])
    setInput("")
    setSelectedFile(null)
    setShowUpload(false)
    
    if (textareaRef.current) {
      textareaRef.current.style.height = '40px'
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (enterToSend && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      } else if (!enterToSend && e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    }
  }

  // Add drag event handlers for the entire interface
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    if (!showUpload) {
      setShowUpload(true)
    }
    setIsDraggingGlobal(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    // Only set dragging to false if we're leaving the main container
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return
    }
    setIsDraggingGlobal(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDraggingGlobal(false)
  }

  return (
    <Card 
      className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#1a1a1a]"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Show overlay when file is being dragged */}
      {isDraggingGlobal && !showUpload && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="flex items-center gap-2 text-[#1e3fec]">
              <Upload className="h-6 w-6" />
              <span className="text-lg font-medium">Drop your file here</span>
            </div>
          </div>
        </div>
      )}
      
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
                {message.file && (
                  <div className="mb-2 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm">
                    <Paperclip className="h-4 w-4" />
                    <span className="flex-1 truncate">{message.file.name}</span>
                    <span className="text-xs opacity-70">
                      {(message.file.size / 1024 / 1024).toFixed(1)} MB
                    </span>
                  </div>
                )}
                <p className="mt-1 whitespace-pre-wrap">{message.content}</p>
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
          <div ref={messagesEndRef} />
        </div>
      </CardContent>

      <CardFooter className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#1a1a1a]">
        <div className="flex w-full flex-col gap-4">
          {showUpload && (
            <FileUpload
              onFileSelect={setSelectedFile}
              onClear={() => setSelectedFile(null)}
              selectedFile={selectedFile}
              isDraggingGlobal={isDraggingGlobal}
            />
          )}
          <div className="flex items-center justify-end gap-2 text-xs text-gray-500">
            <button
              onClick={() => setEnterToSend(!enterToSend)}
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-[#75a6ff] hover:bg-[#1e3fec]/10 transition-colors"
              title={enterToSend ? "Enter to send, Shift+Enter for new line" : "Shift+Enter to send, Enter for new line"}
            >
              {enterToSend ? (
                <>
                  <ArrowRight className="h-4 w-4" />
                  <span>Enter to send</span>
                </>
              ) : (
                <>
                  <ArrowDown className="h-4 w-4" />
                  <span>Enter for new line</span>
                </>
              )}
            </button>
          </div>
          <div className="flex items-end gap-2">
            <button
              onClick={() => setShowUpload(!showUpload)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <Paperclip className="h-5 w-5" />
            </button>
            <div className="relative flex-1">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about ITNB AG..."
                rows={1}
                className="w-full min-h-[40px] max-h-[150px] resize-none rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-900 transition-all focus:border-[#1e3fec] focus:outline-none focus:ring-1 focus:ring-[#1e3fec] dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100"
                style={{
                  lineHeight: '1.5',
                  overflowY: 'auto'
                }}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim() && !selectedFile}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e3fec] text-white transition-colors hover:bg-[#1e3fec]/90 disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
} 