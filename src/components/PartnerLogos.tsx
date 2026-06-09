// Inline mono-colored faux wordmarks for the partner row — no external assets needed.
import type { ReactNode } from 'react';

type Logo = { name: string; node: ReactNode };

export const PARTNER_LOGOS: Logo[] = [
  { name: 'Workday',     node: <span className="font-display text-base font-bold tracking-tight text-ink-700/80"><span className="text-ink-900">Work</span>day</span> },
  { name: 'BambooHR',    node: <span className="font-display text-base font-bold tracking-tight text-ink-700/80"><span className="text-ink-900">Bamboo</span>HR</span> },
  { name: 'Gusto',       node: <span className="font-display text-base font-bold tracking-tight italic text-ink-700/80">gusto<span className="text-ink-400">·</span></span> },
  { name: 'Rippling',    node: <span className="font-mono text-sm font-bold tracking-tighter text-ink-700/80">rippling<span className="text-ink-400">.</span></span> },
  { name: 'Greenhouse',  node: <span className="font-display text-base font-bold tracking-tight text-ink-700/80"><span className="text-ink-900">Green</span>house</span> },
  { name: 'Personio',    node: <span className="font-display text-xs font-light uppercase tracking-[0.2em] text-ink-700/80">personio</span> },
  { name: 'Deel',        node: <span className="font-display text-base font-bold italic tracking-tight text-ink-700/80">deel</span> },
  { name: 'HiBob',       node: <span className="font-display text-base font-extrabold tracking-tight text-ink-700/80">HiBob</span> },
  { name: 'Zenefits',    node: <span className="font-display text-base font-bold tracking-tight text-ink-700/80"><span className="text-ink-900">zene</span>fits</span> },
  { name: 'SAP',         node: <span className="font-mono text-sm font-bold tracking-widest text-ink-700/80">S/4HANA</span> },
];
