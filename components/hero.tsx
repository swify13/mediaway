import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Sparkles, Bot, Gift } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.25_0.1_300_/_0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.2_0.08_320_/_0.2),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-accent/10 blur-3xl delay-1000" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-4 py-24 sm:px-6 lg:flex-row lg:px-8 lg:py-32">
        <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          {/* Special offer badge */}
          <div className="mb-4 inline-flex animate-bounce items-center gap-2 rounded-full border border-accent/50 bg-accent/20 px-4 py-2 text-sm font-semibold text-accent">
            <Gift className="h-4 w-4" />
            DARMOWY AI BOT DLA KAZDEGO!
            <Sparkles className="h-4 w-4" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Promuj swoje social media
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">Rozwiń swoje </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              social media
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Media Way to profesjonalny serwer reklamowy, który pomoże Ci wypromować Twoje
            kanały social media. Zwiększ zasięgi, zdobądź nowych obserwujących i rozwijaj
            swoją społeczność.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground shadow-[0_0_30px_oklch(0.7_0.25_300_/_0.4)] transition-all hover:shadow-[0_0_50px_oklch(0.7_0.25_300_/_0.6)] hover:scale-105"
            >
              <Link href="https://discord.gg/aPFfBShaqW" target="_blank">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                <MessageCircle className="mr-2 h-4 w-4" />
                Dolacz do Discorda - ZA DARMO!
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-border/50 bg-transparent text-foreground hover:border-primary/50 hover:bg-primary/10"
            >
              <Link href="#cennik">
                Zobacz co zyskujesz
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="text-center">
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Zadowolonych klientów</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Wsparcie na Discord</div>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" />
            <div className="hidden text-center sm:block">
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary">
                Darmowe
              </div>
              <div className="text-sm text-muted-foreground">Rozpoczęcie</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:flex-1">
          <div className="relative">
            <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-2xl" />
            <div className="relative rounded-2xl border border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
              <Image
                src="/logo.png"
                alt="Media Way"
                width={280}
                height={280}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
