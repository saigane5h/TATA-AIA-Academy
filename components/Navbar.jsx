'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Menu, X, Play } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Video Guides' },
  { href: '/policies', label: 'Policy Updates' },
  { href: '/promotions', label: 'Offers & Rewards' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-red flex items-center justify-center">
              <Play size={14} className="text-white ml-0.5" />
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-navy text-sm tracking-tight">Health Insurance</span>
              <span className="block font-bold text-red text-sm tracking-tight -mt-0.5">Video Hub</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${pathname === link.href ? 'text-red bg-red/5' : 'text-gray-600 hover:text-navy hover:bg-gray-100'}`}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/courses" className="btn-red px-5 py-2 text-sm inline-flex items-center gap-1.5">
              <Play size={13} /> Watch Videos
            </Link>
          </div>
          <button className="md:hidden text-gray-600 hover:text-navy" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${pathname === link.href ? 'text-red bg-red/5' : 'text-gray-600 hover:text-navy'}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/courses" onClick={() => setOpen(false)} className="block mt-2 btn-red px-4 py-2.5 text-sm text-center">
            <Play size={13} className="inline mr-1.5" /> Watch Videos
          </Link>
        </div>
      )}
    </header>
  )
}
