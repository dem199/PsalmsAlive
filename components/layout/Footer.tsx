import Link from 'next/link'

const footerNav = {
  Explore: [
    { label: 'Home', href: '/' },
    { label: 'Episodes', href: '/episodes' },
    { label: 'About', href: '/about' },
    { label: 'Faith Journey', href: '/faith-journey' },
  ],
  Connect: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'YouTube', href: '#youtube' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Facebook', href: '#facebook' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#060f1d] border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                stroke="#C9A54C"
                strokeWidth="1.4"
                strokeLinecap="round"
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
              <span className="font-playfair text-cream text-lg">
                Psalms<span className="text-gold italic"> Alive</span>
              </span>
            </Link>
            <p className="font-lato text-cream/40 text-sm leading-relaxed max-w-xs">
              A faith storytelling platform bringing the Book of Psalms to life through
              dramatic visual storytelling. Created by{' '}
              <a href="https://avariodigitals.com/" target="_blank" rel="noopener noreferrer" className="text-gold/60 hover:text-gold transition-colors duration-200">
                Avario Digitals
              </a>.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-cinzel text-[0.65rem] tracking-[0.22em] uppercase text-gold mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-lato text-cream/45 text-sm hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cream/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-lato text-cream/25 text-xs">
            © {new Date().getFullYear()} Psalms Alive · Created by{' '}
            <a href="https://avariodigitals.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold/60 transition-colors duration-200">
              Avario Digitals
            </a>{' '}· All rights reserved.
          </p>
          <p className="font-cinzel text-gold/30 text-[0.6rem] tracking-[0.2em] uppercase">
            Where Scripture Meets Story
          </p>
        </div>
      </div>
    </footer>
  )
}