import { getWhatsAppDefaultCtaHref } from '../lib/whatsappPhone.js'
import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

const ctaFrameStyle = {
  backgroundImage: "url('/cuadro5.png')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
}

export function SummerFinalCtaSection() {
  const reservaHref = getWhatsAppDefaultCtaHref()

  return (
    <section
      className={`w-full min-w-0 bg-white ${landingOverflow}`}
      aria-labelledby="summer-final-cta-title"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx} pb-6 pt-8 sm:pb-8 sm:pt-10 lg:pb-10 lg:pt-12`}>
        <h2
          id="summer-final-cta-title"
          className="m-0 text-center text-[clamp(1.1rem,2.4vw+0.55rem,2.75rem)] font-black uppercase leading-tight tracking-tight text-brand-blue sm:text-[clamp(1.2rem,2vw+0.62rem,3rem)] md:text-[clamp(1.35rem,1.65vw+0.68rem,3.25rem)]"
        >
          ¿Listo para divertirte en estas vacaciones aprendiendo inglés?
        </h2>
      </div>

      <div className="w-full min-w-0 bg-brand-green px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-8 xl:px-12">
        <div className="mx-auto flex w-full min-w-0 max-w-[72rem] flex-col items-center gap-1 sm:gap-1.5">
          <a
            href={reservaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link m-0 text-center text-[clamp(0.82rem,1.2vw+0.42rem,1.65rem)] font-black uppercase leading-snug tracking-tight text-brand-blue underline-offset-2 transition-opacity hover:opacity-90 sm:text-[clamp(0.9rem,1.05vw+0.46rem,1.85rem)] md:text-[clamp(0.98rem,0.9vw+0.5rem,2rem)]"
          >
            Solicita más info sobre nuestro summer ahora
          </a>
          <a
            href={reservaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link m-0 text-center text-[clamp(0.82rem,1.2vw+0.42rem,1.65rem)] font-black uppercase leading-snug tracking-tight text-brand-blue underline-offset-2 transition-opacity hover:opacity-90 sm:text-[clamp(0.9rem,1.05vw+0.46rem,1.85rem)] md:text-[clamp(0.98rem,0.9vw+0.5rem,2rem)]"
          >
            Respondemos en menos de 10 minutos.
          </a>
        </div>
      </div>

      <div
        className={`${landingMaxWidthBox} ${landingSectionHx} flex justify-center py-8 sm:py-10 lg:py-12`}
      >
        <a
          href={reservaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link group inline-flex w-full max-w-[16.5rem] shrink-0 flex-col items-stretch px-3 py-1.5 transition-[filter,transform] active:scale-[0.99] min-[400px]:max-w-[17.5rem] min-[400px]:px-3.5 min-[400px]:py-1.5 sm:max-w-[19rem] sm:px-4 sm:py-2 md:max-w-[20.5rem] md:px-4 md:py-2 lg:max-w-[22rem] lg:px-5 lg:py-2"
          style={ctaFrameStyle}
        >
          <span className="flex min-h-[2rem] w-full min-w-0 items-center justify-center whitespace-nowrap px-1.5 text-center text-[clamp(0.68rem,1.6vw+0.22rem,0.88rem)] font-black uppercase italic leading-tight tracking-normal text-white transition-[filter,transform] group-hover:brightness-[1.06] min-[400px]:min-h-[2.1rem] min-[400px]:px-2 min-[400px]:text-[clamp(0.72rem,1.35vw+0.26rem,0.94rem)] sm:min-h-[2.2rem] sm:text-[clamp(0.76rem,1.1vw+0.28rem,1rem)] md:min-h-[2.3rem] md:text-[clamp(0.8rem,0.85vw+0.3rem,1.05rem)] lg:min-h-[2.4rem] lg:text-[clamp(0.84rem,0.55vw+0.32rem,1.08rem)]">
            Reserva tu cupo limitado
          </span>
        </a>
      </div>
    </section>
  )
}
