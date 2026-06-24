"use client"

import type React from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Proof = {
  src: string
  width: number
  height: number
  alt: string
}

const PROOFS: Proof[] = [
  {
    src: "/depoimentos/dep-sobriedade.png",
    width: 237,
    height: 240,
    alt: "Mensagem de aluno: 'Oi Gabriel, completei 15 dias de sobriedade! Voltei pro trabalho e minha filha voltou a me abraçar.'",
  },
  {
    src: "/depoimentos/dep-familia.png",
    width: 283,
    height: 181,
    alt: "Mensagem de aluno: 'Fala Gabriel, hoje fiz 15 dias limpo. Seu método me deu uma nova chance.'",
  },
  {
    src: "/depoimentos/dep-dignidade.png",
    width: 298,
    height: 172,
    alt: "Mensagem de aluno: 'Gabriel, 15 dias limpo hoje! Seu método me deu de volta minha família e minha dignidade.'",
  },
  {
    src: "/depoimentos/dep-terapia.png",
    width: 694,
    height: 249,
    alt: "Mensagem de aluna: 'Gabriel, muito obrigada pela terapia. Suas consultas me deixaram segura para lutar contra o vício.'",
  },
]

export function WhatsappCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = PROOFS.length

  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % count)
    }, 4500)
    return () => clearInterval(id)
  }, [paused, count])

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
    setPaused(true)
  }
  function onTouchMove(e: React.TouchEvent) {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current
    }
  }
  function onTouchEnd() {
    if (Math.abs(touchDeltaX.current) > 45) {
      goTo(index + (touchDeltaX.current < 0 ? 1 : -1))
    }
    touchStartX.current = null
    setTimeout(() => setPaused(false), 5000)
  }

  return (
    <div
      className="mx-auto w-full max-w-lg select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Stage: holds the real screenshot, sized to its own aspect ratio */}
      <div
        className="relative flex min-h-[260px] items-center justify-center rounded-3xl border border-border bg-card/60 p-4 shadow-2xl sm:min-h-[300px] sm:p-6"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {PROOFS.map((p, i) => (
          <div
            key={p.src}
            aria-hidden={i !== index}
            className={`transition-opacity duration-500 ease-out ${
              i === index ? "relative opacity-100" : "pointer-events-none absolute inset-0 m-auto h-fit w-fit opacity-0"
            }`}
          >
            <Image
              src={p.src || "/placeholder.svg"}
              width={p.width}
              height={p.height}
              alt={p.alt}
              priority={i === 0}
              sizes="(max-width: 640px) 90vw, 460px"
              className="mx-auto h-auto w-auto max-w-full rounded-xl shadow-lg ring-1 ring-white/10"
              style={{ maxHeight: "60vh" }}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Mensagem anterior"
          onClick={() => goTo(index - 1)}
          className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex items-center gap-2">
          {PROOFS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para mensagem ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Próxima mensagem"
          onClick={() => goTo(index + 1)}
          className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
