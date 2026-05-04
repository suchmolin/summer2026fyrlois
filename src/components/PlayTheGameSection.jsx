import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

/** Líneas 1–2: grande, extra negrita (escala ~×1.38). */
const headlinePlay =
  'm-0 whitespace-nowrap font-black uppercase leading-[0.98] tracking-tight text-[clamp(1.52rem,4.55vw+0.65rem,2.52rem)] sm:text-[clamp(2.12rem,4.65vw+0.92rem,3.52rem)] md:text-[clamp(2.48rem,4.1vw+1.05rem,4.05rem)] lg:text-[clamp(2.82rem,3.35vw+1.18rem,4.68rem)] xl:text-[clamp(3.2rem,2.85vw+1.32rem,5.32rem)]'

/** Líneas 3–4: cuerpo descriptivo (más grande vs. antes, interlineado ajustado). */
const bodyMuted =
  'm-0 whitespace-nowrap font-bold uppercase leading-[1.12] tracking-[0.05em] text-brand-blue text-[clamp(0.78rem,1.65vw+0.4rem,0.98rem)] sm:text-[clamp(1.12rem,1.92vw+0.6rem,1.4rem)] md:text-[clamp(1.18rem,1.52vw+0.66rem,1.48rem)] lg:text-[clamp(1.26rem,1.2vw+0.72rem,1.56rem)]'

/** Líneas 5–6: naranja, intermedio (escala ~×1.38). */
const taglineOrange =
  'm-0 whitespace-nowrap font-black uppercase leading-[0.98] tracking-tight text-brand-promo-orange text-[clamp(1.18rem,2.85vw+0.54rem,1.68rem)] sm:text-[clamp(1.5rem,2.85vw+0.7rem,2.2rem)] md:text-[clamp(1.68rem,2.45vw+0.78rem,2.48rem)] lg:text-[clamp(1.88rem,2.02vw+0.86rem,2.78rem)] xl:text-[clamp(2.1rem,1.72vw+0.95rem,3.08rem)]'

export function PlayTheGameSection() {
  return (
    <section
      className={`w-full min-w-0 bg-white ${landingOverflow} py-8 sm:py-10 md:py-12 lg:py-14`}
      aria-labelledby="play-the-game-heading"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx}`}>
        <div className="flex w-full min-w-0 flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 xl:gap-10">
          <div className="order-1 flex w-full min-w-0 shrink-0 justify-center lg:order-1 lg:w-[min(100%,42%)] lg:max-w-xl lg:justify-start xl:max-w-2xl">
            <img
              src="/reloj.png"
              alt=""
              width={520}
              height={520}
              className="h-auto w-full max-w-[min(100%,16rem)] object-contain sm:max-w-[min(100%,18rem)] md:max-w-[min(100%,20rem)] lg:max-w-full"
              loading="lazy"
              decoding="async"
              aria-hidden
            />
          </div>

          <div className="order-2 flex w-full min-w-0 max-w-full flex-col items-end gap-0.5 text-right sm:gap-1 lg:order-2 lg:flex-1 lg:pl-6 xl:pl-10">
            <h2 id="play-the-game-heading" className="sr-only">
              Play the game, speak the language
            </h2>
            <p className={`${headlinePlay} text-brand-blue`}>Play the game.</p>
            <p className={`${headlinePlay} text-brand-green`}>Speak the language.</p>

            <div className="mt-0 flex w-full max-w-[min(100%,38rem)] flex-col items-end gap-0 sm:max-w-[min(100%,40rem)] lg:max-w-[min(100%,42rem)] xl:max-w-[min(100%,46rem)]">
              <p className={bodyMuted}>La emoción del mundial continua</p>
              <p className={bodyMuted}>
                Con nuestro summer, donde tu hijo juega,
              </p>
            </div>

            <div className="mt-0 flex w-full max-w-[min(100%,38rem)] flex-col items-end gap-0 sm:max-w-[min(100%,40rem)] lg:max-w-[min(100%,42rem)] xl:max-w-[min(100%,46rem)]">
              <p className={taglineOrange}>Descubre el mundo y aprende</p>
              <p className={taglineOrange}>inglés de forma natural.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
