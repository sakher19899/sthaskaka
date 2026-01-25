"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhatsAppButton() {
  const phoneNumber = "966545825080"
  const message = "مرحباً، أحتاج إلى خدمة سطحة"
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-[#25D366] p-0 shadow-lg hover:bg-[#25D366]/90 md:h-16 md:w-16"
    >
      <Link href={url} target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">
        <MessageCircle className="h-7 w-7 text-white md:h-8 md:w-8" />
      </Link>
    </Button>
  )
}
