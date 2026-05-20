export default function GeometricPattern({ variant = 'triangles' }: { variant?: 'triangles' | 'hexagons' | 'grid' }) {
  const patterns: Record<string, JSX.Element> = {
    triangles: (
      <svg width="100%" height="100%" className="geo-bg">
        <defs>
          <pattern id="tri" width="60" height="60" patternUnits="userSpaceOnUse">
            <polygon points="30,0 60,60 0,60" fill="none" stroke="var(--primary)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tri)" />
      </svg>
    ),
    hexagons: (
      <svg width="100%" height="100%" className="geo-bg">
        <defs>
          <pattern id="hex" width="50" height="86.6" patternUnits="userSpaceOnUse">
            <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="var(--primary)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
    ),
    grid: (
      <svg width="100%" height="100%" className="geo-bg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    ),
  };
  return patterns[variant] || patterns.triangles;
}
