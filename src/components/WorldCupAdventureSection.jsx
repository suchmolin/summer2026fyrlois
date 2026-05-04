import { landingMaxWidthBox, landingSectionHx } from '../lib/landingLayout.js'

/** Misma escala en una línea (azul + verde); `flex-wrap` solo en viewport muy estrecho. */
const mainTitleBlue =
  'm-0 min-w-0 shrink font-black leading-[1.06] tracking-tight text-brand-blue text-[clamp(0.92rem,2.35vw+0.38rem,1.55rem)] min-[380px]:text-[clamp(1.08rem,2.85vw+0.46rem,1.88rem)] sm:text-[clamp(1.38rem,3.45vw+0.56rem,2.38rem)] md:text-[clamp(1.72rem,3.05vw+0.66rem,2.92rem)] lg:text-[clamp(2.02rem,2.65vw+0.78rem,3.55rem)]'

const mainTitleGreen =
  'm-0 min-w-0 shrink font-black leading-[1.06] tracking-tight text-brand-green text-[clamp(0.92rem,2.35vw+0.38rem,1.55rem)] min-[380px]:text-[clamp(1.08rem,2.85vw+0.46rem,1.88rem)] sm:text-[clamp(1.38rem,3.45vw+0.56rem,2.38rem)] md:text-[clamp(1.72rem,3.05vw+0.66rem,2.92rem)] lg:text-[clamp(2.02rem,2.65vw+0.78rem,3.55rem)]'

const subhead =
  'm-0 max-w-[56rem] text-center font-black leading-snug tracking-tight text-brand-blue text-[clamp(0.62rem,1.65vw+0.28rem,0.88rem)] min-[380px]:text-[clamp(0.7rem,1.85vw+0.32rem,0.98rem)] sm:text-[clamp(0.82rem,1.65vw+0.38rem,1.12rem)] md:text-[clamp(0.92rem,1.35vw+0.44rem,1.22rem)] lg:text-[clamp(1.02rem,1.1vw+0.48rem,1.34rem)]'

const challengeLead =
  'm-0 font-black uppercase leading-[1.08] tracking-tight text-brand-blue text-[clamp(0.95rem,2.85vw+0.42rem,1.55rem)] min-[400px]:text-[clamp(1.08rem,3.25vw+0.48rem,1.82rem)] sm:text-[clamp(1.32rem,3.15vw+0.56rem,2.18rem)] md:text-[clamp(1.58rem,2.55vw+0.66rem,2.58rem)] lg:text-[clamp(1.88rem,2.05vw+0.78rem,3.12rem)]'

const challengeAccent =
  'm-0 font-black uppercase leading-[1.08] tracking-tight text-brand-pink text-[clamp(0.95rem,2.85vw+0.42rem,1.55rem)] min-[400px]:text-[clamp(1.08rem,3.25vw+0.48rem,1.82rem)] sm:text-[clamp(1.32rem,3.15vw+0.56rem,2.18rem)] md:text-[clamp(1.58rem,2.55vw+0.66rem,2.58rem)] lg:text-[clamp(1.88rem,2.05vw+0.78rem,3.12rem)]'

const listItem =
  'm-0 min-w-0 flex-1 break-words font-black uppercase leading-[1.05] tracking-tight text-brand-blue max-sm:leading-[1.02] text-[clamp(0.68rem,1.85vw+0.3rem,0.92rem)] min-[400px]:text-[clamp(0.76rem,2.05vw+0.34rem,1.02rem)] sm:text-[clamp(0.9rem,1.75vw+0.4rem,1.18rem)] md:text-[clamp(1.02rem,1.4vw+0.45rem,1.32rem)] lg:text-[clamp(1.12rem,1.1vw+0.5rem,1.48rem)] sm:leading-snug'

const BULLETS = [
  'Juegos inspirados en el fútbol',
  'Cultura de diferentes países',
  'Comunicación en inglés desde el primer momento',
]

function ListRow({ children }) {
  return (
    <li className="flex min-w-0 items-center gap-1 py-0 sm:gap-1.5 md:gap-2">
      <img
        src="/FLECHA.png"
        alt=""
        width={88}
        height={88}
        className="h-[clamp(1.6rem,4.2vw+0.38rem,2.05rem)] w-[clamp(1.6rem,4.2vw+0.38rem,2.05rem)] shrink-0 object-contain object-center sm:h-[clamp(2.35rem,6vw+0.65rem,3.1rem)] sm:w-[clamp(2.35rem,6vw+0.65rem,3.1rem)] md:h-[clamp(2.85rem,7.5vw+0.9rem,3.85rem)] md:w-[clamp(2.85rem,7.5vw+0.9rem,3.85rem)] lg:h-[clamp(3.25rem,8.5vw+1.1rem,4.35rem)] lg:w-[clamp(3.25rem,8.5vw+1.1rem,4.35rem)] xl:h-[clamp(3.65rem,9vw+1.25rem,4.85rem)] xl:w-[clamp(3.65rem,9vw+1.25rem,4.85rem)]"
        loading="lazy"
        decoding="async"
        aria-hidden
      />
      <p className={listItem}>{children}</p>
    </li>
  )
}

export function WorldCupAdventureSection() {
  return (
    <section
      className="w-full min-w-0 bg-white pt-7 pb-0 sm:pt-11 sm:pb-0 md:pt-12 md:pb-0 lg:pt-14 lg:pb-0"
      aria-labelledby="world-cup-adventure-heading"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx}`}>
        <header className="flex w-full flex-col items-center gap-2 sm:gap-4 md:gap-5">
          <h2
            id="world-cup-adventure-heading"
            className="m-0 flex w-full min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 px-1 text-center uppercase min-[420px]:flex-nowrap min-[420px]:gap-x-2.5 sm:gap-x-3"
          >
            <span className={mainTitleBlue}>Fyr Lois</span>
            <span className={mainTitleGreen}>World Cup Adventure</span>
          </h2>
          <p className={`${subhead} uppercase`}>
            Transforma el aprendizaje en una experiencia real.
          </p>
        </header>
      </div>

      <div className="relative m-0 mt-6 w-full min-w-0 shrink-0 max-sm:flex max-sm:min-h-[min(28svh,12.5rem)] max-sm:flex-col max-sm:justify-end sm:mt-10 sm:block sm:min-h-0 md:mt-11 lg:mt-12">
        <figure className="relative z-0 m-0 w-full min-w-0 shrink-0">
          <img
            src="/NINAESPANA.png"
            alt="Niña con la camiseta de la selección española señalando el contenido del programa"
            width={900}
            height={1100}
            decoding="async"
            className="block h-auto w-full max-w-full"
            loading="lazy"
          />
        </figure>

        {/* Móvil: texto con márgenes laterales (envuelve). sm+: banda derecha. */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="pointer-events-auto absolute left-[29%] right-0 top-0 min-w-0 max-w-full break-words pt-0.5 sm:left-[60%] sm:right-0 sm:top-0 sm:max-w-none sm:pt-0 sm:pl-1 sm:pr-0 md:left-[48%] md:top-0 lg:left-[44%] lg:top-0 xl:left-[40%] xl:top-0 md:pl-2 lg:pl-3 xl:pl-4">
            <div className="flex min-w-0 flex-col gap-0 text-balance">
              <p className={`${challengeLead} break-words`}>Cada día es un</p>
              <p className={`${challengeAccent} break-words`}>Nuevo desafío:</p>
            </div>
            <ul className="mt-1 flex min-w-0 list-none flex-col gap-0.5 p-0 sm:mt-1.5 sm:gap-1.5 md:gap-2">
              {BULLETS.map((line) => (
                <ListRow key={line}>{line}</ListRow>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
