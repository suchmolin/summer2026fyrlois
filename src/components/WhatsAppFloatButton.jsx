import { getWhatsAppDefaultCtaHref } from '../lib/whatsappPhone.js'

export function WhatsAppFloatButton() {
  const href = getWhatsAppDefaultCtaHref()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-link fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-[60] block leading-none transition-transform duration-200 ease-out hover:scale-[1.2] active:scale-[0.98] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:right-[max(1.5rem,env(safe-area-inset-right,0px))]"
      aria-label="Abrir WhatsApp para pedir más información del Summer 2026"
    >
      <img
        src="/ws.png"
        alt=""
        className="h-14 w-14 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] sm:h-16 sm:w-16"
        width={56}
        height={56}
        decoding="async"
        aria-hidden
      />
    </a>
  )
}
