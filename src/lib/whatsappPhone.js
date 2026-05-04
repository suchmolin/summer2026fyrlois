/** +1 (689) 322-5402 — solo dígitos para https://wa.me/ */
export const WHATSAPP_DEFAULT_DIGITS = '16893225402'

export function getWhatsAppPhoneDigits() {
  const raw = import.meta.env.VITE_WHATSAPP_PHONE
  const cleaned =
    typeof raw === 'string' && raw.trim() !== '' ? raw.replace(/\D/g, '') : ''
  return cleaned || WHATSAPP_DEFAULT_DIGITS
}

export function getWhatsAppHref() {
  return `https://wa.me/${getWhatsAppPhoneDigits()}`
}

export const WHATSAPP_DEFAULT_CTA_MESSAGE =
  'Hola estoy escribiendo para inscribir a mi hijo/hija en el programa de summer con el 40% de descuento'

export function getWhatsAppHrefWithText(message) {
  const q = typeof message === 'string' ? encodeURIComponent(message) : ''
  return q ? `${getWhatsAppHref()}?text=${q}` : getWhatsAppHref()
}

export function getWhatsAppDefaultCtaHref() {
  return getWhatsAppHrefWithText(WHATSAPP_DEFAULT_CTA_MESSAGE)
}
