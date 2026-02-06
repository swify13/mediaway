const stats = [
  {
    value: "100%",
    label: "Zadowolonych klientów",
    description: "gwarantowane",
  },
  {
    value: "24/7",
    label: "Wsparcie Discord",
    description: "zawsze dostępne",
  },
  {
    value: "Darmowe",
    label: "Rozpoczęcie",
    description: "bez opłat",
  },
  {
    value: "Social",
    label: "Media Focus",
    description: "YouTube, TikTok, Insta",
  },
]

export function Stats() {
  return (
    <section id="statystyki" className="relative border-y border-border/50 py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-primary sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 font-medium text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
