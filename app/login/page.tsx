"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "admin") {
      // Store login state in both localStorage and cookies
      localStorage.setItem("isLoggedIn", "true")
      document.cookie = "isLoggedIn=true; path=/"
      
      // Force a router refresh and navigation
      router.refresh()
      router.push("/")
    } else {
      setError("Invalid credentials. Use admin/admin")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#02133A] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <div className="flex flex-col items-center">
            <h1 className="font-montserrat font-bold text-3xl text-[#02133A] tracking-tight">
              itnb ag
            </h1>
            <span className="font-montserrat text-sm italic text-[#FF7F50]">
              Enterprise AI Platform
            </span>
          </div>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full"
                autoComplete="username"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                autoComplete="current-password"
              />
            </div>
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#1e3fec] text-white py-2 px-4 rounded-lg hover:bg-[#1e3fec]/90 transition-colors"
            >
              Login
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 