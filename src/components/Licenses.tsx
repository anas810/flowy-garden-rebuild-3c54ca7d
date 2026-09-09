type State = "expansion" | "contraction";

export function Licenses({ state }: { state: State }) {
  const positive = state === "expansion";
  const accent = positive ? "var(--expansion)" : "var(--contraction)";

  return (
    <div
      className="licenses pointer-events-none absolute right-6 top-[24%] w-36 sm:right-16 sm:w-44"
      aria-hidden="true"
    >
      <span className="label block text-center text-[10px] text-muted-foreground">
        Exits
      </span>

      <div className="relative mt-4 flex h-28 flex-col items-center justify-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          {/* door / exit icon */}
          <svg
            viewBox="0 0 64 72"
            className="h-16 w-14"
            fill="none"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* door frame */}
            <rect x="10" y="8" width="44" height="56" rx="2" />
            {/* open door slab */}
            <path d="M18 14 L46 14 L42 58 L14 58 Z" opacity={0.35} />
            {/* door handle */}
            <circle cx="40" cy="36" r="2.5" fill={accent} stroke="none" />
            {/* arrow pointing out */}
            <path d="M28 36 L20 36 M24 32 L20 36 L24 40" />
          </svg>

          {/* expansion: stable floor line with calm glow */}
          {positive && (
            <div className="floor-glow absolute bottom-2 left-1/2 h-px w-16 -translate-x-1/2">
              <div
                className="h-full w-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`,
                  opacity: 0.8,
                  animation: "exit-floor-pulse 3s ease-in-out infinite",
                }}
              />
            </div>
          )}

          {/* contraction: flickering bid ticker */}
          {!positive && (
            <div
              className="bid-ticker absolute -right-1 top-2 flex flex-col items-end gap-0.5 text-[8px] font-semibold leading-none"
              style={{ color: accent }}
            >
              <span style={{ animation: "bid-flicker-1 0.55s steps(1) infinite" }}>
                12.40
              </span>
              <span style={{ animation: "bid-flicker-2 0.65s steps(1) infinite" }}>
                12.55
              </span>
              <span style={{ animation: "bid-flicker-3 0.75s steps(1) infinite" }}>
                12.80
              </span>
              <span style={{ animation: "bid-flicker-4 0.85s steps(1) infinite" }}>
                13.05
              </span>
            </div>
          )}
        </div>

        {/* caption line */}
        <span
          className="mt-1 text-[9px] font-medium tracking-wide"
          style={{ color: accent, opacity: 0.85 }}
        >
          {positive ? "low floor" : "crowd-priced"}
        </span>
      </div>

      <style>{`
        @keyframes exit-floor-pulse {
          0%, 100% { opacity: 0.35; transform: scaleX(0.85); }
          50% { opacity: 0.9; transform: scaleX(1); }
        }
        @keyframes bid-flicker-1 {
          0%, 100% { opacity: 1; }
          25% { opacity: 0.3; }
          50% { opacity: 0.8; }
          75% { opacity: 0.2; }
        }
        @keyframes bid-flicker-2 {
          0%, 100% { opacity: 0.7; }
          20% { opacity: 0.2; }
          45% { opacity: 1; }
          80% { opacity: 0.4; }
        }
        @keyframes bid-flicker-3 {
          0%, 100% { opacity: 0.4; }
          30% { opacity: 1; }
          60% { opacity: 0.2; }
          85% { opacity: 0.9; }
        }
        @keyframes bid-flicker-4 {
          0%, 100% { opacity: 0.9; }
          15% { opacity: 0.2; }
          55% { opacity: 0.6; }
          70% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .licenses * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
