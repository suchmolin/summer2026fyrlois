import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

/** Misma cápsula que adults2026fyrlois/FaqSection (FaqItem); solo una línea de texto centrada. */
const ITEMS = [
  { text: '27 años de experiencia', accent: 'green' },
  { text: 'Aprenden inglés de forma natural', accent: 'pink' },
  { text: 'Desarrollan confianza al comunicarse', accent: 'orange' },
  { text: 'Mejoran habilidades sociales', accent: 'green' },
  { text: 'Trabajan en equipo', accent: 'orange' },
  { text: 'Se divierten mientras aprenden', accent: 'pink' },
]

function accentBarClass(accent) {
  if (accent === 'pink') return 'bg-brand-pink'
  if (accent === 'orange') return 'bg-brand-promo-orange'
  return 'bg-brand-green'
}

function SummerWhyItem({ text, accent }) {
  return (
    <article
      className={`mx-auto flex h-[6rem] w-[20rem] items-center rounded-[1.2rem] sm:h-[5.3rem] sm:w-[31rem] md:h-[5.7rem] md:w-[44rem] lg:h-[6.2rem] lg:w-[58rem] xl:h-[6.5rem] xl:w-[66rem] ${accentBarClass(accent)}`}
    >
      <div className="mx-auto flex h-full w-[18.8rem] items-center justify-center rounded-[1.2rem] bg-[#ececec] px-4 py-2 sm:w-[29.5rem] sm:px-6 sm:py-1 md:w-[42.2rem] md:px-8 md:py-0 lg:w-[56.1rem] lg:px-10 xl:w-[64rem]">
        <p className="m-0 min-w-0 text-balance text-center text-[clamp(0.78rem,0.65vw+0.56rem,1.55rem)] font-black uppercase leading-tight tracking-tight text-brand-blue">
          {text}
        </p>
      </div>
    </article>
  )
}

export function PorQueSummerSection() {
  return (
    <section
      className={`w-full min-w-0 bg-white ${landingOverflow} py-12 sm:py-14 lg:py-20`}
      aria-labelledby="por-que-summer-heading"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx}`}>
        <div className="mx-auto flex w-full min-w-0 max-w-[75rem] flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          <div className="flex w-full flex-col items-center gap-2 sm:gap-2.5">
            <h2
              id="por-que-summer-heading"
              className="m-0 text-center text-[clamp(1.35rem,2.35vw+0.62rem,3.2rem)] font-black uppercase leading-none tracking-tight text-brand-green"
            >
              ¿Por qué este summer?
            </h2>
            <p className="m-0 max-w-[52rem] text-center text-[clamp(0.82rem,1.05vw+0.42rem,1.65rem)] font-black uppercase leading-tight tracking-tight text-brand-blue">
              Una experiencia de diversión y aprendizaje
            </p>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7">
            {ITEMS.map((item) => (
              <SummerWhyItem key={item.text} text={item.text} accent={item.accent} />
            ))}
          </div>

          <div className="flex w-full min-w-0 flex-col items-center gap-1 px-2 text-center sm:gap-1.5">
            <p className="m-0 max-w-[56rem] text-balance text-[clamp(0.82rem,1.1vw+0.4rem,1.75rem)] font-black uppercase leading-snug tracking-tight text-brand-blue">
              <span className="text-brand-green">+27 años</span>{' '}
              <span>enseñando a niños cumplir a sus metas</span>
            </p>
            <p className="m-0 max-w-[56rem] text-balance text-[clamp(0.82rem,1.1vw+0.4rem,1.75rem)] font-black uppercase leading-snug tracking-tight text-brand-blue">
              Incluyendo estudiar en Estados Unidos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
