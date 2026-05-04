/** Ilustración compacta: anillo verde, balón estilo mapa y copa (referencia visual del hero). */
export function WorldCupHeroGraphic({ className = '' }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[min(100%,17rem)] sm:max-w-[min(100%,20rem)] ${className}`}
      aria-hidden
    >
      <svg
        className="h-auto w-full drop-shadow-sm"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="120"
          cy="128"
          rx="108"
          ry="44"
          transform="rotate(-28 120 128)"
          stroke="#76bc21"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse
          cx="120"
          cy="128"
          rx="108"
          ry="44"
          transform="rotate(34 120 128)"
          stroke="#76bc21"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="118" cy="118" r="52" fill="#001a72" />
        <g
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
          fill="none"
        >
          <path d="M66 118h104" />
          <path d="M118 66v104" />
          <ellipse cx="118" cy="118" rx="52" ry="22" />
          <path d="M76 88c14 10 30 14 42 14s32-5 46-16" />
          <path d="M76 148c14-10 30-14 42-14s32 5 46 16" />
        </g>
        <path
          fill="#f9c900"
          stroke="#001a72"
          strokeWidth="1.5"
          d="M118 24l8 18h18l-14 12 5 19-17-11-17 11 5-19-14-12h18l8-18z"
        />
        <path
          fill="#e8eefc"
          stroke="#001a72"
          strokeWidth="2"
          d="M96 200h44l-6-28h-32l-6 28zm10-28l4-52h16l4 52h-24z"
        />
        <ellipse cx="118" cy="174" rx="28" ry="6" fill="#001a72" opacity="0.2" />
      </svg>
    </div>
  )
}
