"use client"

import { Shield, Zap, Heart, Award } from "lucide-react"

const badges = [
  {
    icon: Shield,
    label: "100% Bezpiecznie",
  },
  {
    icon: Zap,
    label: "Szybkie efekty",
  },
  {
    icon: Heart,
    label: "Wspierajaca spolecznosc",
  },
  {
    icon: Award,
    label: "Sprawdzony serwer",
  },
]

export function TrustBadges() {
  return (
    <section className="relative py-12 border-y border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <badge.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
