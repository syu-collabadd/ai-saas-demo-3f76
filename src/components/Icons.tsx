// Tiny inline icon set (no lucide-react dep). Stroke icons, 1.6px.
type P = { className?: string; size?: number };
const base = (size = 18) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const Phone = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.34 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.54 2.8.66A2 2 0 0 1 22 16.92Z"/>
  </svg>
);
export const Sparkle = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3l1.8 4.6L18 9.4l-4.2 1.8L12 16l-1.8-4.8L6 9.4l4.2-1.8L12 3z"/>
    <path d="M19 14l.7 1.7L21.4 16l-1.7.4L19 18l-.7-1.6L16.6 16l1.7-.3L19 14zM5 4l.6 1.5L7 6l-1.4.5L5 8l-.6-1.5L3 6l1.4-.5L5 4z"/>
  </svg>
);
export const Shield = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);
export const Clock = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 2"/>
  </svg>
);
export const Bot = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="7" width="18" height="12" rx="3"/>
    <path d="M12 3v4M8 13h.01M16 13h.01M9 17h6"/>
    <circle cx="8" cy="13" r="1" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="13" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
export const FileText = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <path d="M14 2v6h6M8 13h8M8 17h6"/>
  </svg>
);
export const Users = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
export const Lock = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
export const Plug = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M9 2v6M15 2v6M5 8h14v3a7 7 0 0 1-14 0V8zM12 18v4"/>
  </svg>
);
export const Star = ({ className, size, filled = true }: P & { filled?: boolean }) => (
  <svg {...base(size)} className={className} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
  </svg>
);
export const Check = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M5 12l5 5L20 7"/>
  </svg>
);
export const ArrowRight = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M5 12h14M13 5l7 7-7 7"/>
  </svg>
);
export const MapPin = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
export const Calendar = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);
export const Lightning = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
  </svg>
);
export const Chart = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3 3v18h18"/>
    <path d="M7 14l4-4 3 3 5-6"/>
  </svg>
);
export const KeyRound = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="8" cy="15" r="4"/>
    <path d="M10.85 12.15L19 4M18 5l3 3M15 8l3 3"/>
  </svg>
);
export const Webhook = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2M6 16.98V12M12 7v5.99c0 1.1.94 1.95 1.9 2.48a4 4 0 0 1 1.1 6.53M12 7a3 3 0 0 1 3-3"/>
  </svg>
);
export const Globe = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
  </svg>
);
export const BadgeCheck = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3.85 8.62a4 4 0 0 1 0-3.24 4 4 0 0 1 2.95-2.04 4 4 0 0 1 3.6.62 4 4 0 0 1 3.6-.62 4 4 0 0 1 2.95 2.04 4 4 0 0 1 0 3.24 4 4 0 0 1 0 3.24 4 4 0 0 1-2.95 2.04 4 4 0 0 1-3.6-.62 4 4 0 0 1-3.6.62 4 4 0 0 1-2.95-2.04 4 4 0 0 1 0-3.24z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);
export const Quote = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c0 4-2 5-3 5zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c0 4-2 5-3 5z"/>
  </svg>
);
