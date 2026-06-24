"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ScrollToOfferButton({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  function handleClick() {
    const target = document.getElementById("oferta")
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <Button
      type="button"
      onClick={handleClick}
      size="lg"
      className={cn(
        "h-auto w-full max-w-md rounded-full bg-primary px-6 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] hover:bg-primary sm:text-lg",
        className,
      )}
    >
      {children}
    </Button>
  )
}
