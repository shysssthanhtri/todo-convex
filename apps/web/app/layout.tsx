import "@workspace/ui/globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "@/components/providers";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

/**
 * Root HTML layout for the application that applies global fonts and app-level providers.
 *
 * Renders the top-level <html> and <body> elements, sets `lang="en"`, enables
 * suppression of hydration warnings, applies the configured sans and mono font
 * CSS variables and utility classes, and wraps `children` with the `Providers`
 * component to supply app-wide context/state.
 *
 * @param children - The React node(s) to render inside the app providers.
 * @returns The top-level HTML structure containing the provided children.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
