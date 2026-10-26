import { siteConfig } from '../../data/config'
import './Footer.css'

const currentYear = new Date().getFullYear()

const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About the Community', href: '#about' },
  { label: 'Events & Workshops', href: '#events' },
  { label: 'Featured Projects', href: '#projects' },
  { label: 'Learning Resources', href: '#learning' },
  { label: 'Core Team', href: '#team' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer section-dark" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Brand info */}
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <div className="footer__cloud-icon" aria-hidden="true">
                <svg width="22" height="16" viewBox="0 0 26 20" fill="none">
                  <path
                    d="M20.5 8.5a5 5 0 0 0-9.7-1.5A4 4 0 1 0 10.5 15H20a3.5 3.5 0 0 0 .5-7z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <div className="footer__brand-name">{siteConfig.clubName}</div>
                <div className="footer__brand-college">{siteConfig.collegeShort}</div>
              </div>
            </div>
            <p className="footer__brand-desc">
              A student-run technology community at {siteConfig.collegeName}, Belagavi —
              learning, building, and exploring cloud computing together.
            </p>
          </div>

          {/* Quick links */}
          <nav className="footer__links" aria-label="Footer navigation">
            <div className="footer__links-title">Quick Links</div>
            <ul role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* College info */}
          <div className="footer__college">
            <div className="footer__links-title">Institution</div>
            <div className="footer__college-info">
              <div className="footer__college-name">{siteConfig.collegeName}</div>
              <div className="footer__college-loc">{siteConfig.location}</div>
              {siteConfig.collegeUrl && (
                <a
                  href={siteConfig.collegeUrl}
                  className="footer__college-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit KLS GIT official website (opens in new tab)"
                >
                  Visit College Website →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {siteConfig.clubName} · {siteConfig.collegeName}. All rights
            reserved.
          </p>
          <p className="footer__disclaimer">
            This is a student community website. Not officially affiliated with or
            endorsed by Amazon Web Services, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
