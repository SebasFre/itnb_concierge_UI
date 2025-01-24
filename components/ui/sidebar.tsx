"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"

interface SidebarContextType {
  expanded: boolean
  setExpanded: (expanded: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({
  children,
  defaultOpen = true,
}: {
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [expanded, setExpanded] = React.useState(defaultOpen)

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function Sidebar({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  const { expanded, setExpanded } = React.useContext(SidebarContext) || {}
  
  return (
    <aside
      className={cn(
        "relative transition-all duration-300 ease-in-out",
        expanded ? "w-64" : "w-16",
        className
      )}
    >
      <button
        onClick={() => setExpanded?.(!expanded)}
        className={cn(
          "absolute -right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#1d34cc] bg-[#02133A] text-[#75a6ff] transition-all duration-300 hover:bg-[#1e3fec]",
          expanded && "rotate-180"
        )}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <div className="h-full overflow-hidden">{children}</div>
    </aside>
  )
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { expanded } = React.useContext(SidebarContext) || {}
  return (
    <div className={cn("p-4 transition-all duration-300", className)} {...props}>
      {expanded ? props.children : <div className="h-8" />}
    </div>
  )
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-2", className)} {...props} />
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("space-y-1", className)} {...props} />
}

export function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={cn("", className)} {...props} />
}

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  icon?: React.ReactNode
  label?: string
}

export function SidebarMenuButton({ 
  className, 
  isActive,
  icon,
  label,
  ...props 
}: SidebarMenuButtonProps) {
  const { expanded } = React.useContext(SidebarContext) || {}
  
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-3 py-2 text-white transition-colors hover:bg-[#1e3fec]/10",
        isActive && "bg-[#1e3fec]/20 text-white",
        !expanded && "justify-center px-2",
        className
      )}
      {...props}
    >
      {icon}
      {expanded && <span className="text-base font-medium">{label}</span>}
    </button>
  )
} 