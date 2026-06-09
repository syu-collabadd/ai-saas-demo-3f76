type P = { size?: number; mono?: boolean };
export default function Brand({ size = 28, mono = false }: P) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="grid place-items-center rounded-lg bg-ink-900"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62} fill="none">
          <path d="M5 19V5h3v5.5L13 5h3.5l-5.2 5.7L17 19h-3.4L9.7 12.6 8 14.4V19H5z" fill="#FBBF24"/>
        </svg>
      </div>
      <div className={`font-display font-extrabold tracking-tight ${mono ? 'text-ink-900' : 'text-ink-900'}`} style={{ fontSize: size * 0.72, lineHeight: 1 }}>
        Quorum
        <span className="ml-1.5 align-middle text-[0.55em] font-semibold uppercase tracking-[0.18em] text-ink-400">HR&nbsp;AI</span>
      </div>
    </div>
  );
}
