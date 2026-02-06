import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Bot, Crown } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Darmowy",
    description: "Idealny na start - poznaj nasze możliwości",
    features: [
      { text: "Dostep do spolecznosci Discord", highlight: false },
      { text: "Podstawowa pomoc od doswiadczonego zarzadu", highlight: true, icon: "crown" },
      { text: "DARMOWY AI Bot do rozwoju social media", highlight: true, icon: "bot" },
      { text: "Porady i tipy od ekspertow", highlight: false },
      { text: "Wymiana doswiadczen z innymi tworcami", highlight: false },
      { text: "Podstawowa promocja kanalow", highlight: false },
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "Kontakt",
    description: "Dla tworcow chcacych szybciej rosnac",
    features: [
      { text: "Wszystko z planu Starter", highlight: false },
      { text: "Priorytetowa promocja", highlight: true, icon: "sparkles" },
      { text: "Indywidualne wsparcie", highlight: false },
      { text: "Dostep do ekskluzywnych kanalow", highlight: false },
      { text: "Analiza profilu", highlight: false },
      { text: "Strategia rozwoju", highlight: false },
      { text: "Dedykowany opiekun", highlight: true, icon: "crown" },
    ],
    popular: true,
  },
  {
    name: "Biznes",
    price: "Kontakt",
    description: "Dla marek i firm z wiekszymi potrzebami",
    features: [
      { text: "Wszystko z planu Pro", highlight: false },
      { text: "Kompleksowa obsluga", highlight: false },
      { text: "Kampanie promocyjne", highlight: true, icon: "sparkles" },
      { text: "Wspolpraca z influencerami", highlight: false },
      { text: "Raportowanie wynikow", highlight: false },
      { text: "Konsultacje strategiczne", highlight: false },
      { text: "VIP wsparcie 24/7", highlight: true, icon: "crown" },
      { text: "Gwarancja rezultatow", highlight: true, icon: "sparkles" },
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="cennik" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.2_0.06_300_/_0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            Cennik
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">Wybierz plan dopasowany do </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Twoich potrzeb
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Zacznij za darmo i rozwijaj się razem z nami. Bez ukrytych kosztów.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-card/80 shadow-[0_0_40px_oklch(0.7_0.25_300_/_0.2)]"
                  : "border-border/50 bg-card/50 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  Najpopularniejszy
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.price === "Kontakt" ? (
                  <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-foreground">
                    {plan.price}
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">PLN/mies.</span>
                  </div>
                )}
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li 
                    key={feature.text} 
                    className={`flex items-start gap-3 ${feature.highlight ? "rounded-lg bg-primary/10 p-2 -mx-2" : ""}`}
                  >
                    {feature.highlight ? (
                      feature.icon === "bot" ? (
                        <Bot className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      ) : feature.icon === "crown" ? (
                        <Crown className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      ) : (
                        <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      )
                    ) : (
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    )}
                    <span className={`text-sm ${feature.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_oklch(0.7_0.25_300_/_0.4)] hover:shadow-[0_0_30px_oklch(0.7_0.25_300_/_0.6)]"
                    : "border-border/50 bg-transparent text-foreground hover:border-primary/50 hover:bg-primary/10"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href="https://discord.gg/aPFfBShaqW" target="_blank">
                  {plan.price === "Darmowy" ? "Dołącz za darmo" : "Skontaktuj się na Discord"}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
