"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MessageSquare, BarChart, LogOut } from "lucide-react"
import { ChatInterface } from "@/components/chat/chat-interface"
import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"chat" | "analytics">("chat")
  const router = useRouter()

  // Check authentication on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    // Clear both localStorage and cookies
    localStorage.removeItem("isLoggedIn")
    document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    router.refresh()
    router.push("/login")
  }

  return (
    <SidebarProvider defaultOpen>
      <div className="flex h-screen flex-col bg-[#02133A]">
        {/* Top Navigation Bar */}
        <nav className="flex h-16 items-center justify-between bg-[#02133A] px-6 flex-shrink-0">
          <div className="flex flex-col">
            <h1 className="font-montserrat font-bold text-3xl text-white tracking-tight">
              itnb ag
            </h1>
            <span className="font-montserrat text-sm italic text-[#FF7F50] -mt-1">
              Enterprise AI Platform
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="font-montserrat text-[#75a6ff] hover:text-[#a3c7ff]">
              Manager Account
            </button>
            <ThemeToggle />
            <button 
              onClick={handleLogout}
              className="text-[#75a6ff] hover:text-[#a3c7ff] transition-colors"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          <Sidebar className="bg-[#02133A] flex-shrink-0">
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveTab("chat")}
                    isActive={activeTab === "chat"}
                    icon={<MessageSquare className="h-5 w-5" />}
                    label="AI Assistant"
                  />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveTab("analytics")}
                    isActive={activeTab === "analytics"}
                    icon={<BarChart className="h-5 w-5" />}
                    label="Analytics Dashboard"
                  />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 overflow-hidden p-4">
            <div className="h-full overflow-auto">
              {activeTab === "chat" ? <ChatInterface /> : <AnalyticsDashboard />}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
} 