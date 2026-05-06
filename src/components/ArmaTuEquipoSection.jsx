import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

const headlineBodyBlue =
  'm-0 font-bold uppercase leading-[1.12] tracking-[0.05em] text-brand-blue text-[clamp(0.66rem,1.25vw+0.38rem,0.86rem)] sm:whitespace-nowrap sm:text-[clamp(1.12rem,1.92vw+0.6rem,1.4rem)] md:text-[clamp(1.18rem,1.52vw+0.66rem,1.48rem)] lg:text-[clamp(1.26rem,1.2vw+0.72rem,1.56rem)]'

const headlineOrange =
  'm-0 whitespace-nowrap font-black uppercase leading-[0.98] tracking-tight text-white text-[clamp(1.18rem,2.85vw+0.54rem,1.68rem)] sm:text-[clamp(1.5rem,2.85vw+0.7rem,2.2rem)] md:text-[clamp(1.68rem,2.45vw+0.78rem,2.48rem)] lg:text-[clamp(1.88rem,2.02vw+0.86rem,2.78rem)] xl:text-[clamp(2.1rem,1.72vw+0.95rem,3.08rem)]'

const cardTitle =
  'm-0 text-center font-black uppercase leading-none tracking-tight text-white text-[clamp(1.65rem,4.5vw+0.85rem,2.1rem)] sm:text-[clamp(1.38rem,2vw+0.7rem,1.75rem)] md:text-[clamp(1.52rem,1.45vw+0.76rem,1.95rem)] lg:text-[clamp(1.68rem,1.15vw+0.84rem,2.15rem)]'

const cardAge =
  'm-0 text-center font-black uppercase leading-none tracking-tight text-brand-blue text-[clamp(1.45rem,4vw+0.78rem,1.82rem)] sm:text-[clamp(1.2rem,1.75vw+0.65rem,1.45rem)] md:text-[clamp(1.32rem,1.25vw+0.7rem,1.55rem)] lg:text-[clamp(1.42rem,1vw+0.75rem,1.68rem)]'

function EtapaCard({ src, alt, title, age }) {
  return (
    <div className="flex w-full min-w-0 max-w-[min(100%,22rem)] flex-col items-center sm:max-w-[10.75rem] md:max-w-[11.25rem] lg:max-w-[11.75rem]">
      <div className="flex aspect-square w-[min(100%,12.5rem)] shrink-0 items-center justify-center overflow-hidden rounded-full sm:w-[min(100%,8.75rem)] md:w-[min(100%,9.5rem)] lg:w-[min(100%,10.25rem)]">
        <img
          src={src}
          alt={alt}
          width={360}
          height={360}
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mt-3 flex w-full flex-col items-center gap-0 sm:mt-4">
        <p className={cardTitle}>{title}</p>
        <p className={cardAge}>{age}</p>
      </div>
    </div>
  )
}

export function ArmaTuEquipoSection() {
  return (
    <section
      className={`w-full min-w-0 bg-brand-green ${landingOverflow} py-9 sm:py-11 md:py-12 lg:py-14`}
      aria-labelledby="arma-equipo-heading"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx}`}>
        <div className="flex w-full min-w-0 flex-col items-stretch gap-8">
          <div className="flex min-w-0 max-w-full flex-col items-center gap-0 text-center">
            <h2 id="arma-equipo-heading" className="sr-only">
              La emoción del mundial continua con nuestro summer, donde tu hijo juega, y descubre el mundo. Aprende ingles de forma natural.
            </h2>
            <p className={`${headlineBodyBlue} whitespace-nowrap`}>
              La emoción del mundial continua con nuestro summer,
            </p>
            <p className={headlineBodyBlue}>donde tu hijo juega, y descubre el mundo</p>
            <p className={headlineOrange}>aprende ingles de forma natural.</p>
          </div>

          <div className="grid w-full min-w-0 max-w-full grid-cols-1 justify-items-center gap-3 sm:grid-cols-3 sm:gap-2.5 md:gap-3">
            <EtapaCard
              src="/nina.png"
              alt="Kids — 3 a 5 años"
              title="Kids"
              age="3-5 años"
            />
            <EtapaCard
              src="/nino.png"
              alt="Elementary — 6 a 11 años"
              title="Elementary"
              age="6-11 años"
            />
            <EtapaCard
              src="/adolescente.png"
              alt="High school — 12 a 17 años"
              title="High school"
              age="12-17 años"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
