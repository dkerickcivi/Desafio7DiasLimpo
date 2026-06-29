import { Check, CreditCard, ShieldCheck } from "lucide-react"

const CHECKOUT_URL = "https://pay.hub.la/BZKQ15DXTsLhRWvK4p9V"

const INCLUDES = [
  "Acesso imediato e vitalício ao protocolo completo",
  "Passo a passo prático para vencer os primeiros 7 dias",
  "Garantia incondicional de 7 dias",
]

function PixIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.02 2.6 6.6 7.02a1.4 1.4 0 0 0 0 1.98l3 3a1.4 1.4 0 0 0 1.98 0l4.42-4.42a1.4 1.4 0 0 1 1.98 0l1.42 1.42a1.4 1.4 0 0 1 0 1.98l-4.42 4.42a1.4 1.4 0 0 0 0 1.98l3 3a1.4 1.4 0 0 0 1.98 0l4.42-4.42a4.2 4.2 0 0 0 0-5.94L20.96 6.6a4.2 4.2 0 0 0-5.94 0L11.02 2.6Z" transform="translate(-3.5 0)" />
    </svg>
  )
}

export function OfferCard() {
  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl border border-primary/40 bg-card shadow-2xl shadow-primary/10">
      <div className="bg-primary px-6 py-3 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-primary-foreground">
          Oferta de lançamento • por tempo limitado
        </p>
      </div>

      <div className="px-6 py-8 sm:px-8">
        <h3 className="text-center text-2xl font-bold text-balance sm:text-3xl">Protocolo 7 Dias Limpo</h3>

        <ul className="mt-6 space-y-3">
          {INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/20">
                <Check className="size-3.5 text-success" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            De <span className="line-through">R$197</span> por apenas
          </p>
          <p className="mt-1 text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">R$27,90</p>
          <p className="mt-2 inline-block rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
            Você economiza mais de 95% hoje
          </p>
        </div>

        {/* Payment methods */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-2 text-xs font-semibold text-foreground">
            <PixIcon className="size-4 text-success" />
            Pix
          </span>
          <span className="flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-2 text-xs font-semibold text-foreground">
            <CreditCard className="size-4 text-primary" />
            Cartão em até 12x
          </span>
        </div>

        {/* Buy button -> real checkout */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex h-auto w-full items-center justify-center rounded-full px-6 py-4 text-center text-base font-bold uppercase tracking-wide shadow-lg transition-transform hover:scale-[1.02] sm:text-lg"
          style={{
            backgroundColor: "#2bb404",
            borderColor: "#00ff1c",
            borderWidth: "2px",
            color: "#000000",
            boxShadow: "0 0 20px rgba(43, 180, 4, 0.4)",
          }}
        >
          Quero largar as drogas agora
        </a>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 text-success" />
          Compra 100% segura • Acesso imediato
        </div>
      </div>
    </div>
  )
}
