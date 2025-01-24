"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AnalyticsDashboard() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
      <div className="bg-[#02133A] rounded-lg border border-[#1d34cc] p-4">
        <h1 className="text-2xl font-bold text-[#a3c7ff]">Analytics Dashboard</h1>
        <h2 className="text-sm text-[#75a6ff]">Usage Metrics & Insights</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-[#02133A] border-[#1d34cc]">
          <CardHeader>
            <CardTitle className="text-[#a3c7ff]">Total Queries</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#75a6ff]">1,234</p>
          </CardContent>
        </Card>

        <Card className="bg-[#02133A] border-[#1d34cc]">
          <CardHeader>
            <CardTitle className="text-[#a3c7ff]">Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#75a6ff]">1.2s</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 