"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="relative">
        {/* Pulsing ring */}
        <div className="absolute -inset-1 animate-pulse rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-sm" />
        
        <div className="relative flex items-center gap-3 rounded-2xl border border-primary/30 bg-card p-4 shadow-[0_0_40px_oklch(0.7_0.25_300_/_0.3)]">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute -right-2 -top-2 rounded-full bg-card p-1 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">
              Darmowy AI Bot!
            </span>
            <span className="text-xs text-muted-foreground">
              Dolacz teraz i rozwijaj social media
            </span>
          </div>

          <Button
            asChild
            size="sm"
            className="ml-2 bg-primary text-primary-foreground shadow-[0_0_15px_oklch(0.7_0.25_300_/_0.4)]"
          >
            <Link href="https://discord.gg/aPFfBShaqW" target="_blank">
              <MessageCircle className="mr-1 h-3 w-3" />
              Dolacz
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
