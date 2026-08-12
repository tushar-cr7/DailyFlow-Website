import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'DailyFlow — Flow. Focus. Finish.',
  description: 'DailyFlow is a focused desktop productivity workspace for planning, focusing, finishing, and reflecting on your day.',
  generator: 'DailyFlow',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'DailyFlow — Flow. Focus. Finish.',
    description: 'DailyFlow is a focused desktop productivity workspace for planning, focusing, finishing, and reflecting on your day.',
    type: 'website',
    images: ['/icon.svg'],
  },
  twitter: {
    card: 'summary',
    title: 'DailyFlow — Flow. Focus. Finish.',
    description: 'DailyFlow is a focused desktop productivity workspace for planning, focusing, finishing, and reflecting on your day.',
    images: ['/icon.svg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#071018',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
