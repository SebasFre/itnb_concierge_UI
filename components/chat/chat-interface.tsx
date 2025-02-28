"use client"

import { useState, useRef, useEffect } from "react"
import { Send, ArrowDown, ArrowRight, Paperclip, Upload, Trash2, ThumbsUp, ThumbsDown, Copy } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FileUpload } from "./file-upload"
import { API_ENDPOINTS, fetchApi, ChatResponse, ChatHistoryItem, UploadFileResponse } from "@/app/config/api"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp?: string
  file?: {
    name: string
    size: number
  }
  sources?: string[]
  confidence?: number
}

interface ChatInterfaceProps {
  chatId: string | null;
}

// Loading indicator component
const LoadingIndicator = () => (
  <div className="max-w-[80%]">
    <div className="flex items-center gap-2 mb-1">
      {/* SC icon removed */}
    </div>
    <div className="flex items-center justify-center">
      <dotlottie-player 
        src="https://lottie.host/9970dbbd-c151-48a9-9ed9-cdb9d37cd873/a3mjaOvOyW.lottie" 
        background="transparent" 
        speed="1" 
        style={{ width: '120px', height: '120px' }} 
        loop 
        autoplay
      ></dotlottie-player>
    </div>
  </div>
)

export function ChatInterface({ chatId }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm ITNB's Sovereign Concierge. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [input, setInput] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadedFiles, setUploadedFiles] = useState<UploadFileResponse[]>([])
  const [showUpload, setShowUpload] = useState(false)
  const [enterToSend, setEnterToSend] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isDraggingGlobal, setIsDraggingGlobal] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load messages from localStorage on initial render or when chatId changes
  useEffect(() => {
    if (!chatId) return;
    
    const chatStorageKey = `chat_${chatId}`;
    const savedMessages = localStorage.getItem(chatStorageKey);
    
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages) as Message[];
        if (parsedMessages.length > 0) {
          setMessages(parsedMessages);
        } else {
          // Reset to default welcome message if no messages
          setMessages([
            {
              role: "assistant",
              content: "Hello! I'm ITNB's Sovereign Concierge. How can I help you today?",
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        }
      } catch (error) {
        console.error('Error parsing saved messages:', error);
        // Reset to default welcome message on error
        setMessages([
          {
            role: "assistant",
            content: "Hello! I'm ITNB's Sovereign Concierge. How can I help you today?",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
    } else {
      // Reset to default welcome message for new chats
      setMessages([
        {
          role: "assistant",
          content: "Hello! I'm ITNB's Sovereign Concierge. How can I help you today?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
    
    setIsInitialized(true);
  }, [chatId]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (!chatId || !isInitialized || messages.length === 0) return;
    
    const chatStorageKey = `chat_${chatId}`;
    localStorage.setItem(chatStorageKey, JSON.stringify(messages));
  }, [messages, isInitialized, chatId]);

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

  // Convert messages to chat history format
  const getHistoryFromMessages = (messages: Message[]): ChatHistoryItem[] => {
    const history: ChatHistoryItem[] = []
    
    for (let i = 1; i < messages.length - 1; i += 2) {
      const userMessage = messages[i]
      const assistantMessage = messages[i + 1]
      
      if (userMessage?.role === 'user' && assistantMessage?.role === 'assistant') {
        history.push({
          question: userMessage.content,
          chat_response: {
            answer: assistantMessage.content,
            confidence: assistantMessage.confidence || 0,
            sources: assistantMessage.sources || [],
            agent_name: null,
            agent_uid: null
          }
        })
      }
    }
    
    return history
  }

  const handleSend = async () => {
    if ((!input.trim() && !selectedFile) || isLoading) return
    
    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    if (selectedFile) {
      userMessage.file = {
        name: selectedFile.name,
        size: selectedFile.size
      }
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setSelectedFile(null)
    setShowUpload(false)
    setIsLoading(true)
    
    if (textareaRef.current) {
      textareaRef.current.style.height = '40px'
    }

    try {
      const response = await fetchApi(API_ENDPOINTS.query, {
        method: 'POST',
        body: JSON.stringify({
          history: [],
          minimum_confidence: 0,
          question: userMessage.content,
          uploaded_documents: []
        })
      })

      const assistantMessage: Message = {
        role: "assistant",
        content: response.answer,
        confidence: response.confidence,
        sources: response.sources,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        role: "assistant",
        content: error instanceof Error 
          ? `Error: ${error.message}`
          : "I apologize, but I encountered an error processing your request. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
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

  // Add a function to clear chat history
  const clearChatHistory = () => {
    const defaultMessage: Message = {
      role: "assistant" as const,
      content: "Hello! I'm ITNB's Sovereign Concierge. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([defaultMessage]);
    
    // Clear chat messages for the current chat ID
    if (chatId) {
      const chatStorageKey = `chat_${chatId}`;
      localStorage.setItem(chatStorageKey, JSON.stringify([defaultMessage]));
    }
  }

  const copyMessageToClipboard = (content: string) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        // Optional: Show a toast or some visual feedback
        console.log("Message copied to clipboard")
      })
      .catch(err => {
        console.error("Failed to copy message: ", err)
      })
  }

  return (
    <div className="flex justify-center w-full h-full">
      <div 
        className="relative flex h-full max-w-6xl w-full flex-col overflow-hidden"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Show overlay when file is being dragged */}
        {isDraggingGlobal && !showUpload && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center gap-2 text-[#333333]">
                <Upload className="h-6 w-6" />
                <span className="text-lg font-medium">Drop your file here</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-row items-center justify-end py-2 px-4">
          <button
            onClick={clearChatHistory}
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            title="Clear chat history"
          >
            <Trash2 className="h-4 w-4" />
            <span className="text-sm">Clear chat</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 pb-48">
          <div className="max-w-4xl mx-auto w-full space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="max-w-[80%]">
                  {message.role === "user" ? (
                    <div className="rounded-xl px-4 py-2 bg-[#333333] text-white shadow-sm mr-10">
                      {message.file && (
                        <div className="mb-2 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm">
                          <Paperclip className="h-4 w-4" />
                          <span className="flex-1 truncate">{message.file.name}</span>
                          <span className="text-xs opacity-70">
                            {(message.file.size / 1024 / 1024).toFixed(1)} MB
                          </span>
                        </div>
                      )}
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  ) : (
                    <div className="relative group ml-10">
                      <div className="flex items-center gap-2 mb-1">
                        {/* SC icon removed */}
                      </div>
                      {message.file && (
                        <div className="mb-2 flex items-center gap-2 rounded-lg bg-transparent dark:bg-transparent px-3 py-2 text-sm border border-gray-200 dark:border-gray-700">
                          <Paperclip className="h-4 w-4" />
                          <span className="flex-1 truncate">{message.file.name}</span>
                          <span className="text-xs opacity-70">
                            {(message.file.size / 1024 / 1024).toFixed(1)} MB
                          </span>
                        </div>
                      )}
                      <div className="rounded-xl px-4 py-2 bg-transparent dark:bg-transparent">
                        <p className="whitespace-pre-wrap text-gray-900 dark:text-gray-100">{message.content}</p>
                      </div>
                      <div className="mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="flex items-center justify-center rounded-full p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Helpful">
                          <ThumbsUp className="h-4 w-4" />
                        </button>
                        <button className="flex items-center justify-center rounded-full p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Not helpful">
                          <ThumbsDown className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => copyMessageToClipboard(message.content)}
                          className="flex items-center justify-center rounded-full p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" 
                          title="Copy message"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start ml-10">
                <LoadingIndicator />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Replace the CardFooter with a floating input container */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <div className="max-w-4xl w-[95%] bg-white/50 dark:bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:-translate-y-0.5 transform duration-300">
            <div className="flex w-full flex-col gap-3 p-3">
              {showUpload && (
                <FileUpload
                  onFileSelect={setSelectedFile}
                  onClear={() => setSelectedFile(null)}
                  selectedFile={selectedFile}
                  isDraggingGlobal={isDraggingGlobal}
                />
              )}
              <div className="flex items-end gap-2">
                <button
                  onClick={() => setShowUpload(!showUpload)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                >
                  <Paperclip className="h-5 w-5" />
                </button>
                <div className="relative flex-1">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything to your Sovereign Concierge..."
                    rows={1}
                    className="w-full min-h-[40px] max-h-[150px] resize-none rounded-xl border border-gray-200 bg-white/60 dark:bg-gray-800/80 px-4 py-2 text-gray-900 transition-all focus:border-[#333333] focus:outline-none focus:ring-1 focus:ring-[#333333] dark:border-gray-800 dark:text-gray-100"
                    style={{
                      lineHeight: '1.5',
                      overflowY: 'auto'
                    }}
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={!input.trim() && !selectedFile}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#333333] text-white transition-colors hover:bg-[#333333]/90 disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center justify-end gap-2 text-xs text-gray-500">
                <button
                  onClick={() => setEnterToSend(!enterToSend)}
                  className="flex items-center gap-1 rounded-lg px-2 py-1 text-[#666666] hover:bg-[#333333]/10 transition-colors"
                  title={enterToSend ? "Enter to send, Shift+Enter for new line" : "Shift+Enter to send, Enter for new line"}
                >
                  {enterToSend ? (
                    <>
                      <ArrowRight className="h-3 w-3" />
                      <span>Enter to send</span>
                    </>
                  ) : (
                    <>
                      <ArrowDown className="h-3 w-3" />
                      <span>Enter for new line</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 