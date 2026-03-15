'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Episodes', href: '/episodes' },
  { label: 'About', href: '/about' },
  { label: 'Faith Journey', href: '/faith-journey' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-gold/10'
            : 'bg-navy/80 backdrop-blur-sm'
        )}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <svg
                width="22"
                height="22"
                viewBox="0 0 28 28"
                fill="none"
                stroke="#C9A54C"
                strokeWidth="1.4"
                strokeLinecap="round"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                {/* Light rays rising from spine */}
                <line x1="14" y1="6" x2="14" y2="1.5" strokeOpacity="0.9" />
                <line x1="14" y1="6" x2="10.5" y2="2.5" strokeOpacity="0.55" />
                <line x1="14" y1="6" x2="17.5" y2="2.5" strokeOpacity="0.55" />
                <line x1="14" y1="6" x2="8.5" y2="4" strokeOpacity="0.3" />
                <line x1="14" y1="6" x2="19.5" y2="4" strokeOpacity="0.3" />
                {/* Open book */}
                <path d="M3 7h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H3z" />
                <path d="M25 7h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
              </svg>
              <span className="font-playfair text-cream text-lg leading-none">
                Psalms<span className="text-gold italic"> Alive</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-lato text-cream/70 text-sm hover:text-gold transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/episodes"
              className="hidden md:inline-flex items-center gap-2 font-cinzel text-[0.7rem] tracking-[0.16em] uppercase bg-gold text-navy px-5 py-2.5 hover:bg-gold-light transition-all duration-300 active:scale-95"
            >
              Watch Series
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-cream hover:text-gold transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-400',
          mobileOpen ? 'visible' : 'invisible'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-navy-dark/80 backdrop-blur-sm transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer panel */}
        <nav
          className={cn(
            'absolute top-[70px] left-0 right-0 bg-navy border-b border-gold/15 px-6 py-8 transition-transform duration-400',
            mobileOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-playfair text-cream text-2xl hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/episodes"
            onClick={() => setMobileOpen(false)}
            className="mt-8 inline-flex font-cinzel text-[0.72rem] tracking-[0.16em] uppercase bg-gold text-navy px-6 py-3 hover:bg-gold-light transition-all duration-300"
          >
            Watch Series
          </Link>
        </nav>
      </div>
    </>
  )
}