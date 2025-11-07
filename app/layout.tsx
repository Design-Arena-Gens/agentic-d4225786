import './globals.css'
import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Professional Engine Rewinding Services',
  description: 'Expert electric motor rewinding, repair, and maintenance services for industrial and commercial applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
