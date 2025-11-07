'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link href="/" className="logo">
          Engine Rewinding Pro
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className={pathname === '/services' ? 'active' : ''}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/service-area" className={pathname === '/service-area' ? 'active' : ''}>
              Service Area
            </Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
