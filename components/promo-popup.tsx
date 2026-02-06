"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, Gift, Clock, Sparkles } from "lucide-react"
import Link from "next/link"

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 })
  const [isScratched, setIsScratched] = useState(false)
  const [scratchProgress, setScratchProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isDrawingRef = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || isScratched) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Fill with scratch overlay
    ctx.fillStyle = "#a855f7"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add texture pattern
    ctx.fillStyle = "#9333ea"
    for (let i = 0; i < canvas.width; i += 8) {
      for (let j = 0; j < canvas.height; j += 8) {
        if ((i + j) % 16 === 0) {
          ctx.fillRect(i, j, 4, 4)
        }
      }
    }

    // Add text
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("ZDRAP TUTAJ!", canvas.width / 2, canvas.height / 2 + 6)
  }, [isScratched])

  const handleScratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || isScratched) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    let x: number, y: number

    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x, y, 20, 0, Math.PI * 2)
    ctx.fill()

    // Calculate scratch progress
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let transparentPixels = 0
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparentPixels++
    }
    const progress = (transparentPixels / (canvas.width * canvas.height)) * 100
    setScratchProgress(progress)

    if (progress > 50) {
      setIsScratched(true)
    }
  }

  const handleMouseDown = () => {
    isDrawingRef.current = true
  }

  const handleMouseUp = () => {
    isDrawingRef.current = false
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawingRef.current) {
      handleScratch(e)
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    handleScratch(e)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-primary/30 bg-card p-6 shadow-[0_0_50px_oklch(0.7_0.25_300_/_0.3)]">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Gift className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
            Specjalna promocja!
          </h2>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-lg font-bold text-accent">-50% ZNIŻKI</span>
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
            <Clock className="h-4 w-4" />
            <span>Oferta wygasa za:</span>
          </div>
          <div className="flex justify-center gap-2">
            <div className="flex flex-col items-center rounded-lg bg-secondary px-4 py-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-xs text-muted-foreground">godz</span>
            </div>
            <span className="text-2xl font-bold text-primary self-center">:</span>
            <div className="flex flex-col items-center rounded-lg bg-secondary px-4 py-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-xs text-muted-foreground">min</span>
            </div>
            <span className="text-2xl font-bold text-primary self-center">:</span>
            <div className="flex flex-col items-center rounded-lg bg-secondary px-4 py-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-xs text-muted-foreground">sek</span>
            </div>
          </div>
        </div>

        {/* Scratch card */}
        <div className="mb-6">
          <p className="text-center text-sm text-muted-foreground mb-3">
            Zdrap, aby odkryć swój kod rabatowy:
          </p>
          <div className="relative mx-auto w-64 h-20 rounded-xl overflow-hidden border-2 border-primary/50 shadow-[0_0_20px_oklch(0.7_0.25_300_/_0.2)]">
            {/* Code underneath */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary/20 to-accent/20">
              <span className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-wider text-primary">
                Media26
              </span>
            </div>
            {/* Scratch overlay */}
            {!isScratched && (
              <canvas
                ref={canvasRef}
                width={256}
                height={80}
                className="absolute inset-0 cursor-pointer touch-none"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onTouchMove={handleTouchMove}
              />
            )}
          </div>
          {isScratched && (
            <p className="text-center text-sm text-primary mt-2 animate-pulse">
              Kod odkryty! Skopiuj go i zrealizuj na Discordzie!
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            asChild
            className="w-full bg-primary text-primary-foreground shadow-[0_0_20px_oklch(0.7_0.25_300_/_0.4)] hover:shadow-[0_0_30px_oklch(0.7_0.25_300_/_0.6)]"
          >
            <Link href="https://discord.com/channels/1378036500318519448/1380914676166168576" target="_blank">
              Zrealizuj kupon
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="w-full border-border/50 bg-transparent text-foreground hover:border-primary/50 hover:bg-primary/10"
          >
            Kontynuuj przeglądanie strony
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          * Promocja ograniczona czasowo. Nie przegap okazji!
        </p>
      </div>
    </div>
  )
}
