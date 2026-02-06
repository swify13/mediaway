import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/30 bg-card/50 p-12 backdrop-blur-sm">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">Gotowy na rozwój swoich </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              social mediów?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Dołącz do naszej społeczności na Discordzie i zacznij promować swoje kanały
            już dziś. Rozpocznij całkowicie za darmo!
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group bg-primary text-primary-foreground shadow-[0_0_30px_oklch(0.7_0.25_300_/_0.4)] transition-all hover:shadow-[0_0_50px_oklch(0.7_0.25_300_/_0.6)]"
            >
              <Link href="https://discord.gg/aPFfBShaqW" target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Dołącz do Discorda
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            100% za darmo. Dołącz do naszej społeczności i zacznij rozwijać swoje social media.
          </p>
        </div>
      </div>
    </section>
  )
}
