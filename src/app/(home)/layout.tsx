// Styles
import '@/styles/globals.css'

// Types
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ogulcan',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export const dynamic = 'force-dynamic'
