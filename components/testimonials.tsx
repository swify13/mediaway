"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Kamil",
    role: "YouTuber",
    avatar: "K",
    content: "Dzieki Media Way moj kanal zyskal 2000 subskrypcji w miesiac! Polecam kazdemu twórcy.",
    rating: 5,
  },
  {
    name: "Ania",
    role: "Influencerka Instagram",
    avatar: "A",
    content: "AI bot pomaga mi codziennie z pomyslami na content. Zarzad serwera jest mega pomocny!",
    rating: 5,
  },
  {
    name: "Dawid",
    role: "TikToker",
    avatar: "D",
    content: "Najlepszy serwer do promocji jaki znalem. Spolecznosc jest super wspierajaca!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.2_0.06_300_/_0.15),transparent_70%)]" />
      
      {/* Animated background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="font-[family-name:var(--font-display)] text-[20vw] font-bold whitespace-nowrap">
          MEDIA WAY
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Star className="h-4 w-4 fill-primary" />
            Opinie uzytkownikow
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">Dolacz do </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              zadowolonych twórcow
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-bold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
