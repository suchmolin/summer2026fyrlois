import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

const CARDS = [
  {
    quote:
      'Me encantó descubrir cómo funcionan los medios y la tecnología que usamos todos los días. Aprendí que la tecnología no es solo para jugar, sino para crear cosas nuevas. ¡Fue genial conocer a otros niños que también aman la tecnología tanto como yo!',
    photoSrc: '/TESTIMONIAL1.png',
    photoAlt: 'Valentina, participante del summer',
    attribution: 'Valentina, 9 años (participante summer 2025)',
  },
  {
    quote:
      'El summer de Fyr Lois fue el impulso que necesitaba. Allí pasé de ver el idioma como una obligación a convertirlo en mi meta. Hoy, a punto de entrar a la universidad, ya soy prácticamente bilingüe. Fue la mejor base para mi futuro académico.',
    photoSrc: '/TESTIMONIAL2.png',
    photoAlt: 'Daniel, alumno y futuro universitario',
    attribution:
      'Daniel, 17 años (alumno y futuro universitario participante summer 2000)',
  },
]

/** Móvil: `cuadromobile.png`; desde `md`: marco de escritorio `COMILLAS.png`. */
const testimonioArticleBg =
  "bg-[url('/cuadromobile.png')] bg-[length:100%_100%] bg-center bg-no-repeat bg-origin-border bg-clip-border md:bg-[url('/COMILLAS.png')]"

const testimonioArticleShell =
  'relative flex min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-[2rem] px-9 pt-22 pb-18 min-[400px]:px-11 min-[400px]:pt-24 min-[400px]:pb-20 sm:px-11 sm:pt-[5.5rem] sm:pb-20 md:px-11 md:pt-24 md:pb-20 lg:px-12 lg:pt-22 lg:pb-14 xl:px-14 xl:pt-24 xl:pb-14'

/** Escala responsive: móvil con vw alto; desde `lg` dos columnas → en `md` sigue una columna ancha. */
const testimonioQuoteType =
  'm-0 min-w-0 break-words text-left font-normal uppercase leading-snug tracking-tight text-brand-blue ' +
  'text-[clamp(0.64rem,2.65vw+0.22rem,0.8rem)] ' +
  'min-[400px]:text-[clamp(0.66rem,2.2vw+0.26rem,0.86rem)] ' +
  'sm:text-[clamp(0.76rem,1.75vw+0.36rem,0.98rem)] ' +
  'md:text-[clamp(0.75rem,1vw+0.34rem,1.02rem)] ' +
  'lg:text-[clamp(0.8rem,0.72vw+0.38rem,1.06rem)] ' +
  'xl:text-[clamp(0.84rem,0.52vw+0.4rem,1.1rem)] ' +
  '2xl:text-[clamp(0.88rem,0.38vw+0.42rem,1.14rem)]'

const testimonioAttributionType =
  'm-0 min-w-0 flex-1 break-words text-left font-normal uppercase leading-snug tracking-tight text-brand-blue ' +
  'text-[clamp(0.6rem,2.2vw+0.2rem,0.76rem)] ' +
  'min-[400px]:text-[clamp(0.62rem,1.85vw+0.22rem,0.8rem)] ' +
  'sm:text-[clamp(0.72rem,1.45vw+0.32rem,0.9rem)] ' +
  'md:text-[clamp(0.7rem,0.85vw+0.3rem,0.94rem)] ' +
  'lg:text-[clamp(0.76rem,0.58vw+0.34rem,0.98rem)] ' +
  'xl:text-[clamp(0.8rem,0.42vw+0.36rem,1.02rem)] ' +
  '2xl:text-[clamp(0.84rem,0.32vw+0.38rem,1.06rem)]'

function TestimonioCard({ quote, photoSrc, photoAlt, attribution }) {
  return (
    <article className={`${testimonioArticleShell} ${testimonioArticleBg}`}>
      <div className="relative flex min-h-0 w-full min-w-0 flex-col">
        <blockquote className="relative z-0 m-0 min-w-0 border-none">
          <p className={testimonioQuoteType}>{quote}</p>
        </blockquote>
        <div className="relative z-0 mt-5 flex min-w-0 items-center gap-3 sm:mt-5 sm:gap-3 md:mt-6">
          <img
            src={photoSrc}
            alt={photoAlt}
            width={192}
            height={192}
            className="size-20 shrink-0 rounded-full object-cover object-center min-[400px]:size-[5.25rem] sm:size-28 md:size-32"
            loading="lazy"
            decoding="async"
          />
          <p className={testimonioAttributionType}>{attribution}</p>
        </div>
      </div>
    </article>
  )
}

export function TestimoniosSection() {
  return (
    <section
      className={`w-full min-w-0 bg-brand-promo-orange ${landingOverflow} py-24 sm:py-28 md:py-28 lg:py-12 xl:py-14`}
      aria-labelledby="testimonios-heading"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx}`}>
        <h2 id="testimonios-heading" className="sr-only">
          Testimonios de participantes del summer
        </h2>
        <div className="mx-auto grid w-full min-w-0 max-w-[min(100%,24rem)] grid-cols-1 justify-items-center gap-12 min-[400px]:max-w-[min(100%,25rem)] sm:max-w-[min(100%,26rem)] md:max-w-[min(100%,28rem)] lg:max-w-[min(100%,68rem)] lg:grid-cols-2 lg:justify-items-stretch lg:gap-8 xl:gap-8">
          {CARDS.map((card) => (
            <TestimonioCard key={card.attribution} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
