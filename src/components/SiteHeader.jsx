import {
  landingHeaderPad,
  landingMaxWidthInner,
  landingOverflow,
} from '../lib/landingLayout.js'

export function SiteHeader() {
  return (
    <header
      className={`w-full min-w-0 bg-white ${landingOverflow} ${landingHeaderPad}`}
    >
      <div
        className={`${landingMaxWidthInner} flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8`}
      >
        <a
          href="/"
          className="inline-flex max-w-full shrink-0 self-center sm:self-auto"
        >
          <img
            src="/logoFyrlois.png"
            alt="Fyr Lois"
            className="h-14 w-auto max-w-[min(100%,230px)] object-contain object-center sm:h-16 sm:max-w-[min(100%,270px)] md:h-[4.25rem] md:max-w-[min(100%,310px)] lg:h-[4.875rem] lg:max-w-[min(100%,340px)] xl:h-[5.5rem] xl:max-w-[min(100%,380px)] 2xl:h-24 2xl:max-w-[min(100%,420px)] min-[1800px]:h-[6.25rem] min-[1800px]:max-w-[min(100%,440px)]"
            width={320}
            height={86}
            decoding="async"
          />
        </a>

        <p className="m-0 text-center font-black uppercase leading-none tracking-tight sm:text-right">
          <span className="text-[clamp(1.65rem,5.8vw+0.4rem,3.5rem)] text-brand-blue italic">
            Summer{' '}
          </span>
          <span className="text-[clamp(1.65rem,5.8vw+0.4rem,3.5rem)] text-brand-green italic">
            2026
          </span>
        </p>
      </div>
    </header>
  )
}
