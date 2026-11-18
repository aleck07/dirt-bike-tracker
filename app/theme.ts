'use client';
// MUI theme for Hourmeter. Roboto for body text, Barlow Condensed for display.
// Fonts are loaded with next/font in app/layout.tsx (--font-roboto, --font-barlow).
// MUI has no "danger" color, so the danger token is palette.error.

import { createTheme } from '@mui/material/styles';
import type { CSSProperties } from 'react';
import { tokens, statusTones } from './tokens';

// Custom typography variant for big numbers on stat cards: <Typography variant="stat">
declare module '@mui/material/styles' {
  interface TypographyVariants {
    stat: CSSProperties;
  }
  interface TypographyVariantsOptions {
    stat?: CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    stat: true;
  }
}

const display = 'var(--font-barlow), "Barlow Condensed", Roboto, sans-serif';
const body = 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif';

const theme = createTheme({
  // Exposes colors as CSS variables (e.g. --mui-palette-primary-main),
  // which makes per-bike brand colors easy to add later.
  cssVariables: true,
  spacing: 8,
  shape: { borderRadius: 8 },

  palette: {
    mode: 'light',
    primary: { main: tokens.primary, dark: '#9a3412', light: '#fdebdd', contrastText: '#ffffff' },
    secondary: { main: tokens.secondary, contrastText: '#ffffff' },
    success: { main: tokens.success, dark: '#1b5e20', contrastText: '#ffffff' },
    // Yellow is light, so text on it is dark
    warning: { main: tokens.warning, dark: '#6b4200', contrastText: tokens.dark },
    error: { main: tokens.danger, contrastText: '#ffffff' },
    background: { default: tokens.light, paper: '#ffffff' },
    text: { primary: tokens.dark, secondary: tokens.muted },
    divider: tokens.border,
  },

  typography: {
    fontFamily: body,
    // Page titles ("Garage", "Part life")
    h1: { fontFamily: display, fontWeight: 600, fontSize: '2.75rem', lineHeight: 1.1, letterSpacing: '0.01em' },
    h2: { fontWeight: 500, fontSize: '1.25rem', lineHeight: 1.3 }, // section headings
    h3: { fontWeight: 500, fontSize: '1.125rem', lineHeight: 1.3 }, // card titles
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
    button: { fontWeight: 500, fontSize: '0.875rem', textTransform: 'none' },
    overline: { fontWeight: 500, fontSize: '0.75rem', letterSpacing: '0.08em', lineHeight: 1.5 },
    // Big numbers on stat cards and the cost-per-ride tiles
    stat: { fontFamily: display, fontWeight: 600, fontSize: '2.75rem', lineHeight: 1.1 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: { body: { backgroundColor: tokens.light, color: tokens.dark } },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8, minHeight: 44, paddingInline: 20 },
        sizeSmall: { minHeight: 36, paddingInline: 14 },
        sizeLarge: { minHeight: 52, fontSize: '1rem' },
        outlined: { borderColor: '#cfc8be', backgroundColor: '#fff' },
      },
    },

    // Stat cards, vehicle cards, table panels
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { borderRadius: 12, border: `1px solid ${tokens.border}`, backgroundImage: 'none' },
      },
    },
    MuiCardContent: {
      styleOverrides: { root: { padding: 20, '&:last-child': { paddingBottom: 20 } } },
    },

    // Status chips: <Chip color="success|warning|error" label="On schedule|Due soon|Overdue" />
    MuiChip: {
      styleOverrides: { root: { height: 26, fontWeight: 500, fontSize: '0.75rem', borderRadius: 13 } },
      variants: [
        { props: { color: 'success', variant: 'filled' }, style: { backgroundColor: statusTones.success.bg, color: statusTones.success.fg } },
        { props: { color: 'warning', variant: 'filled' }, style: { backgroundColor: statusTones.warning.bg, color: statusTones.warning.fg } },
        { props: { color: 'error', variant: 'filled' }, style: { backgroundColor: statusTones.error.bg, color: statusTones.error.fg } },
        // Condition chips on Log ride (Sand, Mud...): any clickable medium chip gets the 44px touch height.
        { props: { size: 'medium', clickable: true }, style: { height: 44, borderRadius: 22, fontSize: '0.875rem', paddingInline: 4 } },
      ],
    },

    // Progress bars for "hours since service" (color="success|warning|error")
    MuiLinearProgress: {
      styleOverrides: {
        root: { height: 8, borderRadius: 4, backgroundColor: tokens.track },
        bar: { borderRadius: 4 },
      },
    },

    // Form fields
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: tokens.light,
          '& .MuiOutlinedInput-notchedOutline': { borderColor: tokens.inputBorder },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: tokens.dark },
        },
      },
    },

    // Dark sidebar and its nav items
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: tokens.dark, color: tokens.light, borderRight: 0 },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0, color: 'inherit' },
      styleOverrides: { root: { backgroundColor: tokens.dark, color: tokens.light } },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          minHeight: 44,
          borderRadius: 8,
          color: '#d6d2cb',
          '& .MuiListItemIcon-root': { color: 'inherit', minWidth: 32 },
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: tokens.navActiveBg,
            color: tokens.navActiveText,
          },
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          minHeight: 48,
          '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: tokens.secondary, color: '#fff' },
        },
      },
    },
  },
});

export default theme;
