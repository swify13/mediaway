"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Media Way Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-foreground">
            Media Way
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#uslugi"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Usługi
          </Link>
          <Link
            href="#statystyki"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Statystyki
          </Link>
          <Link
            href="#cennik"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Cennik
          </Link>
          <Link
            href="#kontakt"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Kontakt
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button
            asChild
            className="bg-primary text-primary-foreground shadow-[0_0_20px_oklch(0.7_0.25_300_/_0.4)] transition-shadow hover:shadow-[0_0_30px_oklch(0.7_0.25_300_/_0.6)]"
          >
            <Link href="https://discord.gg/aPFfBShaqW" target="_blank">
              <MessageCircle className="mr-2 h-4 w-4" />
              Dołącz do Discorda
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <Link
              href="#uslugi"
              className="text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Usługi
            </Link>
            <Link
              href="#statystyki"
              className="text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Statystyki
            </Link>
            <Link
              href="#cennik"
              className="text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Cennik
            </Link>
            <Link
              href="#kontakt"
              className="text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button asChild className="bg-primary text-primary-foreground">
                <Link href="https://discord.gg/aPFfBShaqW" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Dołącz do Discorda
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
