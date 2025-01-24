"use client"

import { useState } from "react"
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

  return (
    <SidebarProvider defaultOpen>
      <div className="flex h-screen flex-col bg-[#02133A]">
        {/* Top Navigation Bar - removed theme classes */}
        <nav className="flex h-16 items-center justify-between bg-[#02133A] px-6">
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
              Staff Account
            </button>
            <ThemeToggle />
            <button className="text-[#75a6ff] hover:text-[#a3c7ff]">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          <Sidebar className="bg-[#02133A]">
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

          <main className="flex-1 overflow-auto p-4">
            {activeTab === "chat" ? <ChatInterface /> : <AnalyticsDashboard />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
} 