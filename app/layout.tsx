import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DailyFlow — Your day. In flow.',
  description: 'DailyFlow is a calm, local-first desktop workspace for planning, focusing, and understanding your day.',
  generator: 'DailyFlow',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#071018',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
