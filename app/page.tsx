import Image from "next/image"
import { Check, Heart, ShieldCheck, X } from "lucide-react"
import { ScrollToOfferButton } from "@/components/scroll-to-offer-button"
import { WhatsappCarousel } from "@/components/whatsapp-carousel"
import { OfferCard } from "@/components/offer-card"

const PAIN_POINTS = [
  "Minha esposa saiu de casa por causa da droga.",
  "Já tentei clínica e recaí.",
  "Passo o dia decidido a não usar e à noite faço tudo de novo.",
  "Estou cansado de lutar sozinho.",
  "Perdi dinheiro, credibilidade e respeito por mim mesmo.",
]

const BENEFITS = [
  <>Entender por que você <strong className="font-semibold text-primary">recai</strong> mesmo querendo parar</>,
  <>Reduzir <strong className="font-semibold text-primary">drasticamente</strong> os gatilhos que te levam ao uso</>,
  <>Saber o que fazer no <strong className="font-semibold text-primary">momento exato</strong> em que a vontade aparece</>,
  <>Recuperar a sensação de <strong className="font-semibold text-primary">controle</strong> sobre a sua vida</>,
  <>Sair do ciclo de <strong className="font-semibold text-primary">culpa, promessa e recaída</strong></>,
  <>Construir uma <strong className="font-semibold text-primary">semana limpa</strong> que vira a base da sua recuperação</>,
]

const TRIED = ["Força de vontade", "CAPS", "Remédio", "Clínica", "Meses limpo e voltou"]

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100svh] flex-col">
        <Image
          src="/gabriel-imponente.jpg"
          alt="Gabriel, criador do Protocolo 7 Dias Limpo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />

        <div className="relative z-10 flex min-h-[100svh] flex-col px-5 py-8">
          {/* top space utilised */}
          <div className="flex items-center justify-center gap-2">
            <span
              className="rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest backdrop-blur-sm sm:px-4 sm:text-xs"
              style={{
                borderColor: "#ff0000",
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "#ff0000",
              }}
            >
              Protocolo 7 Dias Limpo
            </span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="max-w-2xl text-balance font-extrabold leading-[1.15] text-[clamp(1.9rem,7vw,3.8rem)]">
  Você já tentou parar sozinho, <span className="text-primary">mas recaiu.</span>
</h1>
            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-foreground/85 sm:text-lg">
              Você não precisa passar os próximos anos prometendo que vai ser a última vez&quot;. Descubra o{" "}
              <span className="font-semibold text-foreground">protocolo simples</span> que já ajudou dezenas de
              pessoas a passarem os próximos 7 dias sem cair no mesmo ciclo.
            </p>

            <div className="mt-8 flex w-full flex-col items-center">
              <ScrollToOfferButton>Quero começar meus 7 dias limpo</ScrollToOfferButton>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-foreground/80 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-success" /> Acesso imediato
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-success" /> Método prático
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-success" /> Garantia de 7 dias
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mx-auto text-pretty text-base font-bold uppercase tracking-widest"
            style={{
              fontSize: "18px",
              fontFamily: '"Inter", sans-serif',
              fontWeight: "900",
            }}
          >
            <span className="text-foreground">Relatos </span>
            <span className="text-primary">reais</span>
            <span className="text-foreground"> de nossos pacientes</span>
          </p>
        </div>

        <div className="mt-10">
          <WhatsappCarousel />
        </div>
      </section>

      {/* ===== PAIN / IDENTIFICATION ===== */}
      <section className="bg-card/40 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[clamp(1.4rem,5vw,1.9rem)] font-bold leading-tight">
            Talvez você se <span className="text-primary">reconheça</span> aqui
          </h2>
        </div>
        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3">
          {PAIN_POINTS.map((p) => (
            <p
              key={p}
              className="rounded-2xl border border-border bg-background px-5 py-4 text-left text-base italic leading-relaxed text-foreground/90"
            >
              &ldquo;{p}&rdquo;
            </p>
          ))}
        </div>
      </section>

      {/* ===== ABOUT GABRIEL ===== */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[minmax(0,300px)_1fr] md:gap-10">
          <figure className="mx-auto w-full max-w-[280px] overflow-hidden rounded-3xl border border-border md:max-w-none">
            <div className="relative aspect-square">
              <Image
                src="/gabriel-retrato.png"
                alt="Gabriel, criador do Protocolo 7 Dias Limpo"
                fill
                sizes="(max-width: 768px) 280px, 300px"
                className="object-cover"
              />
            </div>
          </figure>

          <div className="text-center md:text-left">
            <h2 className="text-balance text-[clamp(1.4rem,5vw,1.9rem)] font-bold leading-tight">
              Eu já estive <span className="text-primary">exatamente</span> onde você está agora
            </h2>
            <div className="mt-5 space-y-4 text-pretty text-[15px] leading-relaxed text-foreground/90 sm:text-base">
              <p>
                Meu nome é Gabriel. Durante anos eu tentei parar sozinho e{" "}
                <span className="font-semibold text-foreground">falhei várias vezes</span>. Prometia que seria a
                última vez, mas sempre acabava voltando para o mesmo ciclo.
              </p>
              <p>
                Foi quando percebi que o problema não era apenas a substância, mas{" "}
                <span className="font-semibold text-foreground">os hábitos e gatilhos</span> que me levavam de volta
                ao uso.
              </p>
              <p>
                Depois de conquistar minha recuperação, reuni os principais aprendizados que me ajudaram nesse processo
                e transformei tudo no <span className="font-semibold text-primary">Protocolo 7 Dias Limpo</span>. Hoje
                ajudo pessoas que estão vivendo exatamente o que um dia eu vivi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[clamp(1.4rem,5vw,1.9rem)] font-bold leading-tight">
            O que pode mudar nos <span className="text-primary">próximos 7 dias</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/20">
                <Check className="size-4 text-success" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-foreground/90">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRANSFORMATION (FAMILY + RELATIONSHIP) ===== */}
      <section className="bg-card/40 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[clamp(1.4rem,5vw,1.9rem)] font-bold leading-tight">
            O que está em jogo não é <span className="text-primary">só ficar limpo</span>
          </h2>
          <p className="mt-3 text-pretty text-sm text-muted-foreground sm:text-base">
            É voltar a fazer parte da vida de quem você ama.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
          <figure className="group overflow-hidden rounded-3xl border border-border">
            <div className="relative aspect-[4/5]">
              <Image
                src="/gabriel-familia.jpg"
                alt="Gabriel recuperado, ao lado da família"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-left text-sm font-semibold sm:text-base">
                A família de volta — o reencontro que parecia impossível.
              </figcaption>
            </div>
          </figure>

          <figure className="group overflow-hidden rounded-3xl border border-border">
            <div className="relative aspect-[4/5]">
              <Image
                src="/gabriel-namorada.jpeg"
                alt="Gabriel ao lado da namorada"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-left text-sm font-semibold sm:text-base">
                O amor e o respeito de quem decidiu ficar ao seu lado.
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ===== OBJECTION ===== */}
      <section className="bg-card/40 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[clamp(1.4rem,5vw,1.9rem)] font-bold leading-tight">&quot;Mas eu já tentei parar antes&quot;</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {TRIED.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-lg font-semibold leading-relaxed sm:text-xl">
            O problema nunca foi tentar.
            <span className="text-primary"> O problema é tentar sempre da mesma forma.</span>
          </p>
        </div>
      </section>

      {/* ===== OFFER ===== */}
      <section id="oferta" className="scroll-mt-4 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[clamp(1.4rem,5vw,1.9rem)] font-bold leading-tight">
            Quanto vale <span className="text-primary">recuperar o controle</span> da sua vida?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Uma única recaída pode custar{" "}
            <span className="font-semibold text-foreground">centenas de reais</span>, uma discussão familiar, uma
            oportunidade e mais uma semana inteira de culpa.
          </p>
        </div>

        <div className="mt-10">
          <OfferCard />
        </div>

        {/* Guarantee */}
        <div className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-3 rounded-3xl border border-success/30 bg-card p-6 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-success/15">
            <ShieldCheck className="size-6 text-success" />
          </span>
          <h3 className="text-lg font-bold">Teste por 7 dias sem risco</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Se sentir que o protocolo não te ajudou, basta pedir reembolso dentro do prazo. Por qualquer motivo.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden px-5 py-20">
        <Image
          src="/gabriel-mae-irma.jpg"
          alt="Gabriel reunido com a mãe e a irmã"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[clamp(1.6rem,6vw,2.4rem)] font-bold leading-tight">
            Quantas <span className="text-primary">recaídas</span> ainda serão necessárias?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
            Quase todos os relatos tinham algo em comum: <span className="font-semibold text-foreground">tentaram sozinhos, falharam sozinhos</span> e só
            mudaram quando perceberam que continuar do mesmo jeito não estava funcionando.
          </p>
          <p className="mt-4 flex items-center justify-center gap-2 text-base font-semibold text-primary">
            <Heart className="size-5 fill-primary" /> Hoje pode ser o seu dia 1.
          </p>

          <div className="mt-8 flex justify-center">
            <ScrollToOfferButton>Quero começar agora</ScrollToOfferButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">
        Protocolo 7 Dias Limpo • Todos os direitos reservados
      </footer>
    </main>
  )
}
