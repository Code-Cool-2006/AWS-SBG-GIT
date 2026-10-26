import { useState, useEffect, useCallback } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#hero')

  // Listen to scroll position
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-30% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <header
      className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}
      role="banner"
    >
      <div className="navbar__container container">
        {/* Brand */}
        <a
          href="#hero"
          className="navbar__brand"
          aria-label="AWS Student Builder Group at KLS GIT — return to top"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#hero')
          }}
        >
          <span className="navbar__brand-icon" aria-hidden="true">
            <CloudIcon />
          </span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-main">AWS SBG</span>
            <span className="navbar__brand-sub">KLS GIT</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link${
                    activeHash === link.href ? ' navbar__link--active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="navbar__cta">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => handleNavClick('#about')}
            aria-label="Explore community"
          >
            Explore
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`navbar__hamburger${
            mobileOpen ? ' navbar__hamburger--open' : ''
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="navbar__overlay"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav>
          <ul role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__mobile-link${
                    activeHash === link.href ? ' navbar__mobile-link--active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1rem' }}
                onClick={() => handleNavClick('#about')}
              >
                Explore Community
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function CloudIcon() {
  return (
    <svg width="24" height="18" viewBox="0 0 26 20" fill="none" aria-hidden="true">
      <path
        d="M20.5 8.5a5 5 0 0 0-9.7-1.5A4 4 0 1 0 10.5 15H20a3.5 3.5 0 0 0 .5-7z"
        fill="currentColor"
      />
    </svg>
  )
}
