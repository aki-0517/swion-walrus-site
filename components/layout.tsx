"use client"

import type React from "react"
import Header from "@/components/header"


interface LayoutProps {
  children: React.ReactNode
  onWalletSearch: (address: string) => void
}

export default function Layout({
  children,
  onWalletSearch
}: LayoutProps) {

  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header onWalletSearch={onWalletSearch} />
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}

