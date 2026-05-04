import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

const titleLineBase =
  'm-0 font-black uppercase leading-[0.95] tracking-tight'

/** «TEMPORADAS» — un poco más pequeño */
const titleLineTemporadas = `${titleLineBase} text-white text-[clamp(1.55rem,4.4vw+0.48rem,2.4rem)] sm:text-[clamp(1.92rem,3.5vw+0.66rem,3.12rem)] lg:text-[clamp(2.22rem,2.5vw+0.72rem,3.58rem)]`

/** «DISPONIBLES» — un poco más grande */
const titleLineDisponibles = `${titleLineBase} text-brand-promo-yellow text-[clamp(1.95rem,5.4vw+0.62rem,2.95rem)] sm:text-[clamp(2.48rem,4.65vw+0.88rem,4.05rem)] lg:text-[clamp(2.9rem,3.35vw+0.92rem,4.65rem)]`

/** Fechas: móvil un poco más chico + `nowrap` solo en viewport móvil; desde `sm` tamaño normal y puede partir línea. */
const dateBarText =
  'm-0 text-left font-black uppercase leading-tight tracking-tight text-brand-blue max-sm:whitespace-nowrap sm:whitespace-normal text-[clamp(0.66rem,1.75vw+0.22rem,0.84rem)] sm:text-[clamp(1.06rem,2.05vw+0.46rem,1.4rem)] md:text-[clamp(1.2rem,1.35vw+0.54rem,1.68rem)] lg:text-[clamp(1.3rem,1.08vw+0.6rem,1.82rem)]'

const scheduleLabel =
  'm-0 font-black uppercase italic leading-snug text-brand-promo-yellow text-[clamp(0.8rem,1.95vw+0.36rem,1rem)] sm:text-[clamp(0.92rem,1.12vw+0.44rem,1.12rem)] md:text-[clamp(0.98rem,0.85vw+0.46rem,1.2rem)]'

const scheduleLine =
  'm-0 font-black uppercase italic leading-snug text-white text-[clamp(0.76rem,1.85vw+0.34rem,0.95rem)] sm:text-[clamp(0.88rem,0.98vw+0.4rem,1.06rem)] md:text-[clamp(0.94rem,0.7vw+0.42rem,1.14rem)]'

/** Texto de fechas superpuesto al PNG del número, sin caja blanca; `pl-0` en el contenido. */
function NumeroConFecha({ src, children }) {
  return (
    <div className="relative w-full min-w-0">
      <img
        src={src}
        alt=""
        width={200}
        height={120}
        className="block h-auto w-full max-h-[7.5rem] object-contain object-left sm:max-h-[9rem] md:max-h-[11rem] lg:max-h-[12.5rem]"
        loading="lazy"
        decoding="async"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-y-1 left-[30%] right-2 z-10 flex items-center pl-0 max-sm:left-[17%] max-sm:right-1 sm:inset-y-2 sm:left-[26%] sm:right-2 md:left-[24%] md:inset-y-2.5 lg:left-[22%]">
        <div className="pointer-events-auto min-w-0 max-w-full pl-0 pr-2 max-sm:pr-1 max-sm:min-w-0">
          {children}
        </div>
      </div>
    </div>
  )
}

export function TemporadasSection() {
  return (
    <section
      className={`w-full min-w-0 bg-brand-pink ${landingOverflow} py-7 sm:py-9 lg:py-12`}
      aria-labelledby="temporadas-heading"
    >
      <div
        className={`${landingMaxWidthBox} ${landingSectionHx} max-sm:pl-1`}
      >
        <div className="flex w-full min-w-0 flex-col gap-6 max-sm:gap-3 sm:gap-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-stretch lg:gap-x-12 lg:gap-y-5 xl:gap-x-16 xl:gap-y-6">
          <div className="flex min-w-0 max-w-full shrink-0 flex-col lg:col-start-1 lg:row-start-1 lg:self-center lg:max-w-[min(100%,14rem)] xl:max-w-none">
            <h2 id="temporadas-heading" className={titleLineTemporadas}>
              TEMPORADAS
            </h2>
            <p className={titleLineDisponibles}>DISPONIBLES</p>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-2 sm:gap-2.5 lg:col-start-2 lg:row-start-1 lg:max-w-[min(100%,48rem)] xl:max-w-[min(100%,56rem)]">
            <NumeroConFecha src="/NUMERO1.png">
              <p className={dateBarText}>20 DE JULIO AL 14 DE AGOSTO</p>
            </NumeroConFecha>
            <NumeroConFecha src="/NUMERO2.png">
              <p className={dateBarText}>17 DE AGOSTO AL 11 DE SEPTIEMBRE</p>
            </NumeroConFecha>
          </div>

          <div
            className="flex w-full min-w-0 flex-col items-start gap-y-2 max-sm:pt-0 sm:flex-row sm:gap-x-4 sm:gap-y-0 md:gap-x-5 pt-1 sm:pt-1.5 lg:col-start-2 lg:row-start-2 lg:max-w-[min(100%,48rem)] xl:max-w-[min(100%,56rem)]"
            aria-label="Horarios por grupo"
          >
            <div className="shrink-0 whitespace-nowrap">
              <p className={scheduleLabel}>Horarios disponibles:</p>
            </div>
            <div className="flex shrink-0 flex-col gap-1 whitespace-nowrap sm:gap-1.5">
              <p className={`${scheduleLine} whitespace-nowrap`}>
                Grupo 1: 9:00 AM a 12:00 PM
              </p>
              <p className={`${scheduleLine} whitespace-nowrap`}>
                Grupo 2: 2:00 PM a 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
