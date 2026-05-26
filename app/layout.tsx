import type { Metadata } from 'next'
import Link from 'next/link'
import { Providers } from './providers'
import ComparisonBanner from '@/lib/components/ComparisonBanner'
import './globals.css'

export const metadata: Metadata = {
  title: 'College Discovery',
  description: 'Discover and compare colleges',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Providers>
          <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="font-bold text-xl">
                College Discovery
              </Link>
              <nav className="flex gap-6">
                <Link href="/compare" className="hover:text-blue-600">
                  Compare
                </Link>
                <Link href="/signin" className="hover:text-blue-600">
                  Sign in
                </Link>
              </nav>
            </div>
          </header>
          <main className="container mx-auto px-4 py-6 pb-32">
            {children}
          </main>
          <ComparisonBanner />
        </Providers>
      </body>
    </html>
  )
}