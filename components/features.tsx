import { Youtube, Instagram, MessageCircle, TrendingUp, Users, Headphones } from "lucide-react"

const features = [
  {
    icon: Youtube,
    title: "Promocja YouTube",
    description:
      "Zwiększ liczbę subskrypcji i wyświetleń na swoim kanale YouTube. Docieraj do nowych widzów zainteresowanych Twoim contentem.",
  },
  {
    icon: Instagram,
    title: "Wzrost na Instagramie",
    description:
      "Zdobądź więcej obserwujących i polubień na Instagramie. Rozwijaj swoją markę osobistą i biznesową.",
  },
  {
    icon: MessageCircle,
    title: "Rozwój na TikToku",
    description:
      "Wypromuj swoje TikToki i zdobądź więcej followersów. Dotarcie do młodszej, aktywnej społeczności.",
  },
  {
    icon: TrendingUp,
    title: "Wzrost zasięgów",
    description:
      "Zwiększ organiczne zasięgi swoich postów i treści. Algorytmy pokochają Twój content dzięki naszej pomocy.",
  },
  {
    icon: Users,
    title: "Budowanie społeczności",
    description:
      "Zbuduj zaangażowaną społeczność wokół swojej marki. Prawdziwi obserwujący, którzy interaktują z Twoim contentem.",
  },
  {
    icon: Headphones,
    title: "Wsparcie 24/7",
    description:
      "Nasz zespół jest dostępny przez całą dobę na Discordzie. Pomożemy Ci na każdym etapie promocji.",
  },
]

export function Features() {
  return (
    <section id="uslugi" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.2_0.06_300_/_0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            Nasze usługi
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">Promujemy Twoje </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              social media
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kompleksowa promocja na wszystkich platformach społecznościowych
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
