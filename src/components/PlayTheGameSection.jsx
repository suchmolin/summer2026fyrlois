import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

/** Líneas 1–2: grande, extra negrita (escala ~×1.38). */
const headlinePlay =
  'm-0 whitespace-nowrap font-black uppercase leading-[0.98] tracking-tight text-[clamp(1.52rem,4.55vw+0.65rem,2.52rem)] sm:text-[clamp(2.12rem,4.65vw+0.92rem,3.52rem)] md:text-[clamp(2.48rem,4.1vw+1.05rem,4.05rem)] lg:text-[clamp(2.82rem,3.35vw+1.18rem,4.68rem)] xl:text-[clamp(3.2rem,2.85vw+1.32rem,5.32rem)]'

export function PlayTheGameSection() {
  return (
    <section
      className={`w-full min-w-0 bg-white ${landingOverflow} py-8 sm:py-10 md:py-12 lg:py-14`}
      aria-labelledby="play-the-game-heading"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx}`}>
        <div className="relative flex w-full min-w-0 flex-col items-center justify-center gap-0.5 overflow-visible text-center sm:gap-1">
          <img
            src="/balon.png"
            alt=""
            width={220}
            height={220}
            className="pointer-events-none absolute right-0 top-1/2 z-0 h-auto w-[clamp(8rem,34vw,12rem)] -translate-y-1/2 translate-x-[62%] object-contain lg:right-auto lg:left-0 lg:w-[clamp(9rem,14vw,13rem)] lg:-translate-x-[62%]"
            loading="lazy"
            decoding="async"
            aria-hidden
          />
          <h2 id="play-the-game-heading" className="sr-only">
            Play the game, speak the language
          </h2>
          <p className={`${headlinePlay} relative z-10 text-brand-blue`}>Play the game</p>
          <p className={`${headlinePlay} relative z-10 text-brand-pink`}>Speak the lenguage</p>
        </div>
      </div>
    </section>
  )
}
