import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

const blackFontFamily = {
  fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
}

const FAQ_ITEMS = [
  {
    question: '¿Qué edades pueden participar en el plan vacacional?',
    answer:
      'Nuestro programa está diseñado para niños y adolescentes, con grupos organizados por edades para garantizar una experiencia dinámica y adaptada a cada etapa.',
    accent: 'green',
  },
  {
    question: '¿Es necesario tener conocimientos previos de inglés?',
    answer:
      'No es necesario. Realizamos una nivelación para ubicar a cada participante y asegurar que aproveche al máximo cada actividad.',
    accent: 'blue',
  },
  {
    question: '¿Qué incluye el plan vacacional?',
    answer:
      'Incluye clases dinámicas de inglés, actividades recreativas, juegos, dinámicas grupales y una experiencia temática inspirada en el Mundial, donde los estudiantes aprenden mientras se divierten.',
    accent: 'green',
  },
  {
    question: '¿Es un campamento de fútbol o de inglés?',
    answer:
      'Es un Summer Camp para aprender inglés. La temática está inspirada en el Mundial de Fútbol, pero no es un campamento deportivo. Todo está diseñado para que los participantes vivan una experiencia divertida mientras desarrollan su inglés.',
    accent: 'blue',
  },
]

function FaqItem({ question, answer, accent }) {
  const accentColor = accent === 'green' ? 'bg-brand-green' : 'bg-brand-blue'

  return (
    <article
      className={`mx-auto flex h-[6rem] w-[20rem] items-center rounded-[1.2rem] sm:h-[5.3rem] sm:w-[31rem] md:h-[5.7rem] md:w-[44rem] lg:h-[6.2rem] lg:w-[58rem] xl:h-[6.5rem] xl:w-[66rem] ${accentColor}`}
    >
      <div className="mx-auto flex h-full w-[18.8rem] items-center rounded-[1.2rem] bg-[#ececec] px-4 py-2 sm:w-[29.5rem] sm:px-6 sm:py-1 md:w-[42.2rem] md:px-8 md:py-0 lg:w-[56.1rem] lg:px-10 xl:w-[64rem]">
        <div className="flex min-w-0 flex-col items-start">
          <h3
            className="m-0 text-left text-[clamp(0.78rem,0.65vw+0.56rem,1.55rem)] font-black uppercase leading-tight tracking-tight text-brand-blue"
            style={blackFontFamily}
          >
            {question}
          </h3>
          <p className="m-0 mt-1 text-left text-[clamp(0.56rem,0.38vw+0.46rem,1.02rem)] font-bold uppercase leading-tight tracking-tight text-brand-blue">
            {answer}
          </p>
        </div>
      </div>
    </article>
  )
}

const PLACEHOLDER_IMAGES = [
  { src: '/nina.png', alt: 'Summer — imagen de ejemplo (sustituir en producción)' },
  { src: '/nino.png', alt: 'Summer — imagen de ejemplo (sustituir en producción)' },
  {
    src: '/adolescente.png',
    alt: 'Summer — imagen de ejemplo (sustituir en producción)',
  },
]

export function SummerFaqSection() {
  return (
    <section
      className={`w-full min-w-0 bg-white ${landingOverflow} py-14 sm:py-16 md:py-20 lg:py-20 xl:py-24`}
      aria-labelledby="summer-faq-title"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx}`}>
        <div className="mx-auto flex w-full min-w-0 max-w-[75rem] flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <div className="grid w-full min-w-0 grid-cols-3 gap-2 min-[400px]:gap-2.5 sm:gap-3 md:gap-5 lg:gap-6">
            {PLACEHOLDER_IMAGES.map(({ src, alt }) => (
              <figure
                key={src}
                className="m-0 min-h-0 w-full min-w-0 overflow-hidden rounded-lg bg-brand-blue shadow-sm sm:rounded-xl md:rounded-2xl"
              >
                <img
                  src={src}
                  alt={alt}
                  width={800}
                  height={520}
                  className="aspect-[3/4] h-auto w-full object-cover sm:aspect-[4/3] md:aspect-[5/3]"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>

          <div className="flex w-full min-w-0 flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            <h2
              id="summer-faq-title"
              className="m-0 text-center text-[clamp(1.5rem,2.5vw+0.7rem,3.8rem)] font-black uppercase leading-none tracking-tight text-brand-blue"
              style={blackFontFamily}
            >
              Preguntas <span className="text-brand-green">frecuentes</span>
            </h2>

            <div className="flex w-full min-w-0 flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7">
              {FAQ_ITEMS.map((item) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  accent={item.accent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
