import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const focusTags = [
    'Cloud Computing',
    'AWS Services',
    'Student Projects',
    'Tech Workshops',
    'Peer Learning',
  ]

  return (
    <section id="hero" className="hero section-dark" aria-label="Hero">
      {/* Background network illustration */}
      <div className="hero__bg" aria-hidden="true">
        <HeroNetworkSVG />
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          {/* Status Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span>AWS Student Builder Group · KLS GIT</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero__headline">
            <span className="hero__headline-line">Learn.</span>{' '}
            <span className="hero__headline-line hero__headline-accent">Build.</span>{' '}
            <span className="hero__headline-line">Innovate.</span>
          </h1>

          {/* Supporting Description */}
          <p className="hero__subheadline">
            Explore cloud computing, develop practical skills, and build meaningful
            technology projects with the AWS Student Builder Group at{' '}
            <span className="hero__college-name">KLS Gogte Institute of Technology</span>,
            Belagavi.
          </p>

          {/* Actions */}
          <div className="hero__actions">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => scrollTo('#events')}
              aria-label="Explore our events"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Explore Our Events
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => scrollTo('#about')}
              aria-label="Discover our community"
            >
              Discover Our Community
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Focus Tags */}
          <div className="hero__tags" aria-label="Community focus areas">
            {focusTags.map((tag) => (
              <span key={tag} className="hero__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero__scroll-hint" aria-hidden="true">
          <span>Scroll to explore</span>
          <span className="hero__scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  )
}

/**
 * Hand-crafted abstract SVG cloud architecture illustration.
 * Self-contained without external assets.
 */
function HeroNetworkSVG() {
  const gridVertical = Array.from({ length: 10 }, (_, i) => i * 100)
  const gridHorizontal = Array.from({ length: 8 }, (_, i) => i * 80)

  const connectionLines = [
    [620, 140, 760, 220],
    [760, 220, 840, 320],
    [620, 140, 740, 80],
    [760, 220, 680, 340],
    [680, 340, 760, 440],
    [760, 220, 860, 180],
    [740, 80, 860, 60],
    [740, 80, 660, 30],
    [620, 140, 520, 200],
    [520, 200, 560, 320],
    [560, 320, 680, 340],
    [520, 200, 400, 180],
    [400, 180, 320, 280],
    [320, 280, 440, 360],
    [440, 360, 560, 320],
    [320, 280, 200, 200],
    [200, 200, 280, 100],
    [280, 100, 400, 180],
    [680, 340, 640, 460],
    [560, 320, 500, 440],
  ]

  const nodes = [
    { cx: 620, cy: 140, r: 18, primary: true },
    { cx: 760, cy: 220, r: 12 },
    { cx: 740, cy: 80, r: 8 },
    { cx: 840, cy: 320, r: 7 },
    { cx: 860, cy: 180, r: 6 },
    { cx: 860, cy: 60, r: 5 },
    { cx: 660, cy: 30, r: 5 },
    { cx: 680, cy: 340, r: 10 },
    { cx: 760, cy: 440, r: 7 },
    { cx: 640, cy: 460, r: 6 },
    { cx: 520, cy: 200, r: 14, accent: true },
    { cx: 560, cy: 320, r: 9 },
    { cx: 500, cy: 440, r: 6 },
    { cx: 400, cy: 180, r: 11 },
    { cx: 320, cy: 280, r: 9 },
    { cx: 440, cy: 360, r: 7 },
    { cx: 200, cy: 200, r: 8 },
    { cx: 280, cy: 100, r: 7 },
  ]

  return (
    <svg
      className="hero__network-svg"
      viewBox="0 0 900 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="heroGrad1" cx="70%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1e3a6e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#050d1a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="heroGrad2" cx="20%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#00a8e8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#050d1a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Gradient Fills */}
      <rect width="900" height="560" fill="url(#heroGrad1)" />
      <rect width="900" height="560" fill="url(#heroGrad2)" />

      {/* Subtle Background Grid */}
      {gridVertical.map((x) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1="0"
          x2={x}
          y2="560"
          stroke="rgba(255,255,255,0.025)"
          strokeWidth="1"
        />
      ))}
      {gridHorizontal.map((y) => (
        <line
          key={`h-${y}`}
          x1="0"
          y1={y}
          x2="900"
          y2={y}
          stroke="rgba(255,255,255,0.025)"
          strokeWidth="1"
        />
      ))}

      {/* Connection Lines */}
      {connectionLines.map(([x1, y1, x2, y2], i) => (
        <line
          key={`conn-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(0,168,232,0.18)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />
      ))}

      {/* Highlight Connected Lines */}
      <line
        x1="620"
        y1="140"
        x2="760"
        y2="220"
        stroke="rgba(255,153,0,0.35)"
        strokeWidth="1.8"
      />
      <line
        x1="760"
        y1="220"
        x2="680"
        y2="340"
        stroke="rgba(255,153,0,0.25)"
        strokeWidth="1.5"
      />
      <line
        x1="520"
        y1="200"
        x2="620"
        y2="140"
        stroke="rgba(0,168,232,0.4)"
        strokeWidth="1.5"
      />

      {/* Nodes */}
      {nodes.map(({ cx, cy, r, primary, accent }, idx) => (
        <g key={`node-${idx}`}>
          {primary && (
            <>
              <circle cx={cx} cy={cy} r={r + 14} fill="rgba(255,153,0,0.06)" />
              <circle cx={cx} cy={cy} r={r + 7} fill="rgba(255,153,0,0.12)" />
            </>
          )}
          {accent && (
            <>
              <circle cx={cx} cy={cy} r={r + 10} fill="rgba(0,168,232,0.07)" />
              <circle cx={cx} cy={cy} r={r + 5} fill="rgba(0,168,232,0.12)" />
            </>
          )}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill={
              primary
                ? 'rgba(255,153,0,0.92)'
                : accent
                ? 'rgba(0,168,232,0.85)'
                : 'rgba(255,255,255,0.18)'
            }
            stroke={
              primary
                ? 'rgba(255,153,0,0.5)'
                : accent
                ? 'rgba(0,168,232,0.5)'
                : 'rgba(255,255,255,0.2)'
            }
            strokeWidth="1.5"
          />
          {r >= 8 && (
            <circle
              cx={cx}
              cy={cy}
              r={r * 0.3}
              fill={
                primary
                  ? 'rgba(0,0,0,0.5)'
                  : accent
                  ? 'rgba(255,255,255,0.6)'
                  : 'rgba(255,255,255,0.4)'
              }
            />
          )}
        </g>
      ))}

      {/* Cloud silhouette */}
      <g opacity="0.08" transform="translate(820, 60)">
        <ellipse cx="0" cy="20" rx="25" ry="18" fill="white" />
        <ellipse cx="-15" cy="26" rx="16" ry="12" fill="white" />
        <ellipse cx="15" cy="26" rx="16" ry="12" fill="white" />
        <ellipse cx="0" cy="34" rx="22" ry="10" fill="white" />
      </g>
    </svg>
  )
}
