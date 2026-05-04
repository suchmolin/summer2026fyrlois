import { getWhatsAppDefaultCtaHref } from '../lib/whatsappPhone.js'
import { landingMaxWidthBox, landingOverflow } from '../lib/landingLayout.js'

const ctaFrameStyle = {
  backgroundImage: "url('/cuadro3.png')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
}

const headlineLine =
  'whitespace-nowrap font-black leading-[1.06] tracking-normal text-brand-blue text-[clamp(1.1rem,4vw+0.38rem,1.52rem)] min-[480px]:text-[clamp(1.18rem,3.45vw+0.44rem,1.68rem)] sm:text-[clamp(1.28rem,2.95vw+0.5rem,1.95rem)] md:text-[clamp(1.38rem,2.5vw+0.54rem,2.28rem)] lg:text-[clamp(1.55rem,2.05vw+0.58rem,2.6rem)] xl:text-[clamp(1.72rem,1.65vw+0.62rem,2.9rem)] min-[1451px]:text-[clamp(2rem,0.75vw+0.85rem,3.35rem)] min-[1451px]:leading-[1.05]'

const heroContentShell =
  'flex w-full min-h-0 flex-1 flex-col justify-center bg-white pt-0 pb-4.5 min-[400px]:pb-5 sm:pb-5 md:bg-transparent md:py-8 lg:py-9 xl:py-10 min-[1451px]:py-32 min-[1451px]:min-h-screen'

const heroContentMinH =
  'min-h-[min(30dvh,255px)] min-[400px]:min-h-[min(32dvh,272px)] sm:min-h-[min(34dvh,290px)] md:min-h-[min(36dvh,310px)] lg:min-h-[min(40dvh,355px)] xl:min-h-[min(44dvh,400px)] 2xl:min-h-[min(51dvh,500px)] min-[1451px]:min-h-[min(94dvh,1280px)]'

/** Ancho máximo del bloque de contenido: más estrecho en viewport pequeños, más ancho en pantallas grandes. */
const heroContentWidth =
  'mx-auto w-full max-w-[min(100%,22.5rem)] self-center min-[400px]:max-w-[min(100%,24.5rem)] sm:max-w-[min(100%,27rem)] md:mx-0 md:max-w-[min(100%,31rem)] md:self-start lg:max-w-[min(100%,36rem)] xl:max-w-[min(100%,42rem)] 2xl:max-w-[min(100%,48rem)] min-[1451px]:max-w-[min(100%,58rem)]'

/** Móvil: sin padding horizontal para centrar; desde `md` mismo ritmo que la landing. */
const heroSectionHx =
  'ps-0 pe-0 md:pe-8 lg:pe-10 xl:pe-12 2xl:pe-14 min-[1451px]:pe-20'

export function HeroSection() {
  return (
    <section
      className={`relative flex w-full min-w-0 flex-col ${landingOverflow}`}
      aria-labelledby="summer-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[url('/principal.png')] bg-cover bg-no-repeat bg-[position:28%_center] md:block md:bg-[position:22%_center] lg:bg-[position:18%_center] xl:bg-[position:15%_center] 2xl:bg-[position:12%_center]"
        aria-hidden
      />

      <div className={`relative z-10 flex w-full min-w-0 flex-col ${heroContentMinH}`}>
        <div className={`${landingMaxWidthBox} ${heroSectionHx} ${heroContentShell}`}>
          <div
            className={`flex min-w-0 flex-col items-center gap-3.5 text-center min-[400px]:gap-4 sm:gap-5 lg:gap-7 min-[1451px]:gap-12 ${heroContentWidth}`}
          >
            <h1 id="summer-hero-heading" className="m-0 w-full">
              <span className="sr-only">World Cup Adventure</span>
              <img
                src="/logocup.png"
                alt="Fyr Lois — La Cola — World Cup Adventure"
                className="mx-auto h-auto w-full max-w-full object-contain max-h-[min(52vw,12.5rem)] min-[400px]:max-h-[min(46vw,13.5rem)] sm:max-h-[min(40vw,14.5rem)] md:max-h-[min(34vw,15.5rem)] lg:max-h-[min(30vw,16.5rem)] min-[1451px]:max-h-[min(24vw,24rem)]"
                width={810}
                height={400}
                decoding="async"
                sizes="(max-width: 640px) 96vw, (max-width: 1024px) 72vw, (max-width: 1450px) 560px, 720px"
              />
            </h1>

            <div className="flex w-full flex-col items-center gap-0">
              <p className={`m-0 ${headlineLine}`}>Define lo que tu hijo aprende</p>
              <p className={`m-0 ${headlineLine} text-brand-pink`}>
                en estas vacaciones
              </p>
              <p className={`m-0 ${headlineLine}`}>con solo un click</p>
            </div>

            <div className="flex w-full flex-col items-center gap-3 sm:gap-3 min-[1451px]:gap-8">
              <a
                href={getWhatsAppDefaultCtaHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link group inline-flex w-full max-w-md min-h-0 shrink-0 flex-col items-stretch px-3.5 py-2 transition-[filter,transform] active:scale-[0.99] min-[400px]:px-4 min-[400px]:py-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-6 lg:py-3 xl:px-7 xl:py-3 min-[1451px]:max-w-xl min-[1451px]:px-9 min-[1451px]:py-4"
                style={ctaFrameStyle}
              >
                <span className="flex min-h-[2.45rem] w-full min-w-0 items-center justify-center whitespace-nowrap px-1 text-center text-[clamp(0.8rem,2.55vw+0.26rem,0.98rem)] font-black italic leading-tight tracking-normal text-white transition-[filter,transform] group-hover:brightness-[1.06] min-[400px]:min-h-[2.55rem] min-[400px]:text-[clamp(0.86rem,2.25vw+0.3rem,1.05rem)] sm:min-h-[2.65rem] sm:px-1.5 sm:text-[clamp(0.9rem,1.95vw+0.32rem,1.12rem)] md:min-h-[2.75rem] md:text-[clamp(0.94rem,1.65vw+0.34rem,1.2rem)] lg:min-h-[2.85rem] lg:text-[clamp(0.98rem,1.4vw+0.36rem,1.28rem)] xl:text-[clamp(1.02rem,1.15vw+0.38rem,1.35rem)] min-[1451px]:min-h-[3.35rem] min-[1451px]:px-2.5 min-[1451px]:text-[clamp(1.08rem,0.35vw+0.42rem,1.45rem)]">
                  ¡Inscribir ahora!
                </span>
              </a>
              <a
                href={getWhatsAppDefaultCtaHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link m-0 max-w-lg text-center text-[clamp(0.76rem,2.25vw+0.34rem,0.98rem)] font-black uppercase leading-[1.08] tracking-normal text-brand-blue whitespace-nowrap underline-offset-2 transition-[opacity,filter] hover:opacity-90 hover:brightness-[1.02] min-[400px]:text-[clamp(0.82rem,2.05vw+0.36rem,1.05rem)] sm:text-[clamp(0.88rem,1.82vw+0.4rem,1.14rem)] md:text-[clamp(0.94rem,1.55vw+0.42rem,1.22rem)] lg:text-[clamp(1rem,1.28vw+0.44rem,1.32rem)] xl:text-[clamp(1.06rem,1.05vw+0.46rem,1.42rem)] min-[1451px]:max-w-3xl min-[1451px]:text-[clamp(1.2rem,0.35vw+0.55rem,1.75rem)]"
              >
                No pierdas esta oportunidad limitada
              </a>
            </div>
          </div>
        </div>

        <figure className="relative m-0 w-full shrink-0 md:hidden">
          <img
            src="/hero-mobile.png"
            alt=""
            width={1024}
            height={451}
            decoding="async"
            className="block h-auto w-full max-w-full"
            aria-hidden
          />
        </figure>
      </div>
    </section>
  )
}
