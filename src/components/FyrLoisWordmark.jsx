/**
 * Marca FYR LOIS con la “O” sustituida por el globo y anillos (colores de marca).
 */
export function FyrLoisWordmark({ className = '' }) {
  return (
    <div
      className={`flex items-center gap-[0.06em] text-brand-blue ${className}`}
      aria-label="FYR LOIS"
    >
      <span className="text-[clamp(1.25rem,4vw+0.5rem,2.25rem)] font-bold uppercase leading-none tracking-tight italic">
        FYR L
      </span>
      <span className="relative inline-flex h-[1em] w-[1em] shrink-0 items-center justify-center translate-y-[0.04em]">
        <svg
          className="h-full w-full overflow-visible"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <ellipse
            cx="28"
            cy="28"
            rx="26"
            ry="11"
            transform="rotate(-32 28 28)"
            stroke="#76bc21"
            strokeWidth="2.25"
            fill="none"
          />
          <ellipse
            cx="28"
            cy="28"
            rx="26"
            ry="11"
            transform="rotate(38 28 28)"
            stroke="#76bc21"
            strokeWidth="2.25"
            fill="none"
          />
          <circle cx="28" cy="28" r="15" fill="#001a72" />
          <g
            fill="none"
            stroke="white"
            strokeWidth="1.1"
            opacity="0.92"
            strokeLinecap="round"
          >
            <ellipse cx="28" cy="28" rx="15" ry="6" />
            <path d="M13 28h26" />
            <path d="M28 13v30" />
            <path d="M17 18c3 2 6 3 11 3s9-1 12-3" />
            <path d="M17 38c3-2 6-3 11-3s9 1 12 3" />
          </g>
        </svg>
      </span>
      <span className="text-[clamp(1.25rem,4vw+0.5rem,2.25rem)] font-bold uppercase leading-none tracking-tight italic">
        IS
      </span>
    </div>
  )
}
