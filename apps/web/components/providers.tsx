"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

/**
 * Wraps application UI in a configured NextThemes provider for theme management.
 *
 * Provides a Theme provider configured to:
 * - use the `class` attribute for theme switching,
 * - default to the system theme,
 * - allow the system preference to be used,
 * - disable CSS transitions during theme changes,
 * - enable `color-scheme` support.
 *
 * @param children - React node(s) to be rendered inside the theme provider.
 * @returns The children wrapped with the configured NextThemesProvider.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </NextThemesProvider>
  );
}
