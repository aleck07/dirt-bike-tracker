// Raw design tokens. Same values as colors.md and the @theme block in globals.css.
// Kept separate from theme.ts (a client module) so server components can import them too.

export const tokens = {
  dark: '#14110f', // Tire Black
  light: '#f7f4ef', // Dust White
  primary: '#c2410c', // Roost Orange
  secondary: '#2f5d62', // Trail Pine
  success: '#2e7d32', // Fresh Oil
  warning: '#f2b705', // Caution Amber
  danger: '#9f1239', // Overdue Red
  // Extras used by the design
  muted: '#5f5b55',
  border: '#e3e0da',
  inputBorder: '#8a857d',
  track: '#ddd8ce',
  navActiveBg: '#3b2a21',
  navActiveText: '#ffd7bf',
} as const;

// Soft background + dark text pairs for status chips (contrast checked on light surfaces)
export const statusTones = {
  success: { bg: '#e3f1e4', fg: '#1b5e20' },
  warning: { bg: '#fff3c4', fg: '#6b4200' },
  error: { bg: '#fbdce4', fg: '#9f1239' },
} as const;
