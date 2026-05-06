import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

/**
 * Tipografía responsive: el primer `clamp` (sin prefijo) vale solo por debajo de `sm`;
 * desde `sm:` el ritmo queda igual salvo que se edite ese prefijo.
 */
const microPinkPreventa =
  'm-0 font-black uppercase italic tracking-[0.22em] text-brand-pink max-md:tracking-[0.18em] leading-[1.5] sm:leading-[1.55] md:leading-[1.6] text-[clamp(1.1rem,0.48vw+0.9rem,1.48rem)] sm:text-[clamp(1.18rem,0.62vw+0.9rem,1.4rem)] md:text-[clamp(1.18rem,0.78vw+0.9rem,1.52rem)] lg:text-[clamp(1.34rem,0.94vw+1.02rem,1.76rem)] xl:text-[clamp(1.48rem,1.05vw+1.12rem,1.96rem)]'

const microPinkDescuento =
  'm-0 font-black uppercase italic tracking-[0.22em] text-brand-pink max-md:tracking-[0.18em] leading-[1.62] sm:leading-[1.72] text-[clamp(1.06rem,0.46vw+0.86rem,1.4rem)] sm:text-[clamp(1.1rem,0.56vw+0.84rem,1.28rem)] md:text-[clamp(1.06rem,0.68vw+0.82rem,1.38rem)] lg:text-[clamp(1.16rem,0.78vw+0.9rem,1.52rem)] xl:text-[clamp(1.28rem,0.9vw+1rem,1.66rem)]'

const bodyBlue =
  'm-0 font-black uppercase leading-snug tracking-[0.1em] text-brand-blue text-[clamp(1.16rem,0.95vw+0.92rem,1.48rem)] sm:text-[clamp(1.16rem,0.82vw+0.9rem,1.42rem)] md:text-[clamp(1.14rem,0.94vw+0.88rem,1.42rem)] lg:text-[clamp(1.22rem,0.72vw+0.98rem,1.62rem)] xl:text-[clamp(1.34rem,0.6vw+1.06rem,1.82rem)]'

const headlineCupos =
  'm-0 font-black uppercase leading-[1.05] tracking-tight text-[clamp(1.38rem,3.15vw+0.72rem,2.08rem)] sm:text-[clamp(1.28rem,2.48vw+0.62rem,2.05rem)] md:text-[clamp(1.52rem,2.72vw+0.78rem,2.48rem)] lg:text-[clamp(1.92rem,3.15vw+0.94rem,3.12rem)] xl:text-[clamp(2.28rem,2.9vw+1.12rem,3.78rem)] 2xl:text-[clamp(2.62rem,2.48vw+1.28rem,4.42rem)]'

const discountPct =
  'm-0 font-black uppercase leading-[1.02] tracking-tight text-brand-blue text-[clamp(1.48rem,4.35vw+0.68rem,2.18rem)] sm:text-[clamp(1.42rem,4.3vw+0.64rem,2.28rem)] md:text-[clamp(1.82rem,4.75vw+0.82rem,2.95rem)] lg:text-[clamp(2.45rem,5.4vw+1.1rem,3.95rem)] xl:text-[clamp(3.06rem,5.9vw+1.38rem,5rem)] 2xl:text-[clamp(3.55rem,6.2vw+1.6rem,6rem)]'

const priceHero =
  'm-0 font-black leading-[1.02] tracking-tight text-brand-promo-orange text-[clamp(1.68rem,5.1vw+0.72rem,2.48rem)] sm:text-[clamp(1.64rem,5.15vw+0.68rem,2.62rem)] md:text-[clamp(2.12rem,5.85vw+0.9rem,3.4rem)] lg:text-[clamp(2.82rem,6.75vw+1.18rem,4.62rem)] xl:text-[clamp(3.48rem,7.65vw+1.48rem,5.75rem)] 2xl:text-[clamp(4.05rem,7.9vw+1.7rem,6.82rem)]'

export function PreventaSection() {
  return (
    <section
      className={`w-full min-w-0 bg-white ${landingOverflow} py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14`}
      aria-labelledby="preventa-heading"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx}`}>
        <div className="flex w-full min-w-0 flex-col items-stretch gap-8 max-md:gap-10 sm:gap-9 md:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16 2xl:gap-20">
          <div className="order-1 flex min-w-0 w-full max-w-full flex-col items-start gap-1 sm:gap-1.5 lg:order-1 lg:min-w-0 lg:flex-1 lg:max-w-[min(100%,42rem)] xl:max-w-[min(100%,48rem)] 2xl:max-w-[min(100%,54rem)]">
            <p className={`${microPinkPreventa} max-w-full`}>Preventa</p>

            <h2
              id="preventa-heading"
              className={`${headlineCupos} flex max-w-full flex-row flex-wrap items-baseline gap-x-2 gap-y-1 sm:gap-x-2.5 lg:flex-nowrap`}
            >
              <span className="min-w-0 text-brand-blue lg:shrink-0 lg:whitespace-nowrap">
                Primeros
              </span>
              <span className="min-w-0 text-brand-green lg:shrink-0 lg:whitespace-nowrap">
                25 cupos
              </span>
            </h2>

            <div className="mt-0.5 flex w-full min-w-0 max-w-full flex-col items-start gap-1 pl-2 sm:mt-1 sm:pl-4 sm:gap-1.5 md:pl-6 lg:pl-9 xl:pl-11">
              <div className="flex w-full min-w-0 max-w-full flex-row flex-wrap items-end gap-x-2 gap-y-1 sm:gap-x-2.5 md:gap-x-3 lg:flex-nowrap lg:gap-x-4">
                <p className={`${discountPct} min-w-0 max-w-full lg:shrink-0 lg:whitespace-nowrap`}>
                  -40% =
                </p>
                <p className={`${priceHero} min-w-0 max-w-full lg:shrink-0 lg:whitespace-nowrap`}>
                  $480
                </p>
              </div>
              <p className={`${microPinkDescuento} max-w-full`}>Descuento</p>

              <p
                className={`${headlineCupos} mt-1 flex max-w-full min-w-0 flex-row flex-wrap items-baseline gap-x-2 gap-y-1 text-brand-blue sm:mt-1.5 sm:gap-x-2.5 md:gap-x-3 lg:flex-nowrap`}
              >
                <span className="min-w-0 lg:shrink-0 lg:whitespace-nowrap">Precio full =</span>
                <span className="min-w-0 lg:shrink-0 lg:whitespace-nowrap">$780</span>
              </p>
            </div>
          </div>

          <div className="relative order-2 flex w-full min-w-0 max-w-full shrink-0 flex-col items-center gap-2.5 self-stretch overflow-visible pt-1 sm:gap-3 sm:pt-0 lg:order-2 lg:w-auto lg:max-w-[min(100%,26rem)] lg:flex-none lg:self-start xl:max-w-[min(100%,30rem)] 2xl:max-w-[min(100%,32rem)]">
            <img
              src="/balon.png"
              alt=""
              width={220}
              height={220}
              className="pointer-events-none absolute left-0 top-1/2 z-0 h-auto w-[clamp(9.5rem,44vw,14rem)] -translate-x-[70%] -translate-y-1/2 object-contain sm:w-[clamp(10rem,38vw,14.5rem)] lg:left-auto lg:right-0 lg:w-[clamp(10rem,16vw,15rem)] lg:translate-x-[62%]"
              loading="lazy"
              decoding="async"
              aria-hidden
            />
            <img
              src="/23.png"
              alt="Cupos disponibles: 23"
              width={360}
              height={260}
              className="relative z-10 h-auto w-full max-w-[min(100%,16.5rem)] object-contain sm:max-w-[min(100%,18.5rem)] md:max-w-[min(100%,20.5rem)] lg:max-w-[min(100%,22rem)] xl:max-w-[min(100%,26rem)] 2xl:max-w-[min(100%,28rem)]"
              loading="lazy"
              decoding="async"
            />
            <p className={`${bodyBlue} relative w-full max-w-full px-1 text-center max-md:translate-x-5 sm:px-0`}>
              Cupos disponibles
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
