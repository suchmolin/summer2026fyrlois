import {
  landingMaxWidthBox,
  landingOverflow,
  landingSectionHx,
} from '../lib/landingLayout.js'

/** Misma forma de recorte que adults2026fyrlois/SedesSection. */
const sedeImageFrame =
  'overflow-hidden rounded-tl-[clamp(1.25rem,3.5vw,3rem)] rounded-tr-[clamp(1.25rem,3.5vw,3rem)] rounded-bl-[clamp(1.25rem,3.5vw,3rem)] rounded-br-lg'

const sectionTitle =
  'm-0 max-w-full text-center text-balance font-black uppercase leading-none tracking-tight text-brand-green text-[clamp(1.45rem,2.2vw+0.65rem,3rem)] sm:text-[clamp(1.65rem,2.35vw+0.72rem,3.2rem)]'

const cityHeading =
  'm-0 w-full text-center text-balance font-black uppercase leading-none tracking-wide text-white text-[clamp(1.2rem,1.45vw+0.45rem,2.1rem)] sm:text-[clamp(1.35rem,1.55vw+0.5rem,2.35rem)]'

const sedeName =
  'm-0 max-w-full text-center font-black uppercase leading-tight tracking-tight text-brand-promo-orange text-[clamp(0.88rem,1vw+0.32rem,1.5rem)] sm:text-[clamp(0.95rem,1.05vw+0.35rem,1.58rem)]'

const sedeAddress =
  'm-0 w-full max-w-[min(100%,21rem)] text-center font-bold uppercase leading-snug tracking-tight text-white/95 sm:max-w-[min(100%,23rem)] md:max-w-[min(100%,21rem)] lg:max-w-[min(100%,19rem)] text-[clamp(0.72rem,0.55vw+0.34rem,1.02rem)] sm:text-[clamp(0.78rem,0.55vw+0.36rem,1.08rem)]'

function SedeBody({ src, alt, title, address }) {
  return (
    <>
      <div
        className={`mt-[clamp(0.72rem,0.86vw,1.25rem)] aspect-[509/528] w-full max-w-[27rem] lg:mx-auto lg:aspect-square lg:max-w-[min(100%,11.5rem)] ${sedeImageFrame}`}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          width={509}
          height={528}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h4
        className={`${sedeName} mt-[clamp(0.64rem,0.9vw,1.25rem)] w-full max-w-[min(100%,21rem)] px-1.5 max-sm:whitespace-normal sm:max-w-[min(100%,23rem)] sm:whitespace-nowrap sm:px-2 md:max-w-[min(100%,21rem)] md:px-2.5 lg:max-w-[min(100%,19rem)]`}
      >
        {title}
      </h4>
      <p className={`${sedeAddress} mt-[clamp(0.5rem,0.72vw,1.05rem)] px-1.5 sm:px-2 md:px-2.5`}>{address}</p>
    </>
  )
}

function SedeColumn({ city, src, alt, title, address }) {
  return (
    <article className="flex w-full max-w-[36rem] min-w-0 flex-col items-center px-1 text-center sm:px-2 md:px-2.5 lg:max-w-none lg:flex-1 lg:basis-0">
      <h3 className={`${cityHeading} px-1 sm:px-1.5`}>{city}</h3>
      <SedeBody src={src} alt={alt} title={title} address={address} />
    </article>
  )
}

export function SedesPresencialesSection() {
  return (
    <section
      className={`w-full min-w-0 bg-brand-blue ${landingOverflow} py-10 sm:py-12 lg:py-16 xl:py-20`}
      aria-labelledby="sedes-presenciales-heading"
    >
      <div className={`${landingMaxWidthBox} ${landingSectionHx}`}>
        <div className="flex w-full min-w-0 flex-col items-center gap-10 sm:gap-12 lg:gap-14">
          <h2 id="sedes-presenciales-heading" className={sectionTitle}>
            Sedes presenciales
          </h2>

          <div className="w-full min-w-0">
            <div className="mx-auto flex w-full min-w-0 flex-col items-center gap-12 md:grid md:grid-cols-4 md:items-start md:justify-center md:gap-x-[clamp(0.65rem,1.2vw,1.75rem)] md:gap-y-10 lg:gap-y-12">
              <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-8 md:col-span-2 md:grid md:max-w-none md:grid-cols-2 md:items-start md:gap-x-[clamp(0.65rem,1.2vw,1.75rem)] md:gap-y-0">
                <h3 className={`${cityHeading} px-1 sm:px-1.5 md:col-span-2`}>Caracas</h3>
                <article className="flex w-full min-w-0 flex-col items-center px-1 text-center sm:px-2 md:px-2.5 lg:max-w-none lg:flex-1 lg:basis-0">
                  <SedeBody
                    src="/ccct.png"
                    alt="Exterior del centro comercial CCCT en Caracas"
                    title="CCCT"
                    address="Centro Ciudad Comercial Tamanaco, sector Yarey, planta baja, local PB 005."
                  />
                </article>
                <article className="flex w-full min-w-0 flex-col items-center px-1 text-center sm:px-2 md:px-2.5 lg:max-w-none lg:flex-1 lg:basis-0">
                  <SedeBody
                    src="/ucab.png"
                    alt="Campus UCAB Montalbán"
                    title="UCAB"
                    address="UCAB Montalbán, módulo 1, piso 5, oficina A1-53."
                  />
                </article>
              </div>

              <SedeColumn
                city="Barquisimeto"
                src="/nuevasegovia.png"
                alt="Torre y zona de Nueva Segovia en Barquisimeto"
                title="Nueva Segovia"
                address="Multicentro empresarial Crystal Plaza, torre B, 1er piso, local 1-B."
              />
              <SedeColumn
                city="Puerto Ordaz"
                src="/altavista.png"
                alt="Centro comercial Alta Vista en Puerto Ordaz"
                title="Alta Vista"
                address="Centro comercial Naraya, piso 1, local 123."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
