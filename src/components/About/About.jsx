import './About.css'

const PILLARS = [
  {
    icon: <WrenchIcon />,
    variant: 'orange',
    title: 'Projects & Building',
    description:
      'Members collaborate on cloud-based applications, software tools, AI experiments, and data projects — developing skills by building things that actually work.',
    cta: 'View Projects',
    href: '#projects',
  },
  {
    icon: <LightningIcon />,
    variant: 'blue',
    title: 'Events & Workshops',
    description:
      'We host hands-on technical sessions, learning workshops, coding activities, and collaborative events throughout the academic year.',
    cta: 'See Events',
    href: '#events',
  },
  {
    icon: <BookIcon />,
    variant: 'slate',
    title: 'Learning & Skill Building',
    description:
      'From cloud fundamentals to core AWS services, we point members to quality resources that help build practical, applicable cloud skills.',
    cta: 'Explore Resources',
    href: '#learning',
  },
]

export default function About() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const highlights = [
    'Hands-on technical sessions',
    'Collaborative project work',
    'Cloud skill development',
    'Peer knowledge sharing',
    'Developer community culture',
  ]

  return (
    <section id="about" className="about section" aria-label="About the community">
      <div className="container">
        {/* Section Intro */}
        <div className="about__intro">
          <div className="section-label">About the Community</div>
          <h2 className="section-heading about__heading">
            A student community for builders and learners
          </h2>
          <p className="section-subheading about__sub">
            The AWS Student Builder Group at KLS Gogte Institute of Technology is a
            student-run community at the intersection of cloud computing, software
            development, and hands-on learning. We are a space for students who want
            to understand modern technology by working with it — not just studying it.
          </p>
        </div>

        {/* What we do: Text & Graphic */}
        <div className="about__body">
          <div className="about__text-block">
            <h3 className="about__sub-title">What We Do</h3>
            <p>
              We organise technical workshops and learning events that give students
              direct, practical exposure to cloud services and developer tools. Members
              collaborate on projects, share knowledge, and support each other&apos;s
              growth throughout the academic year.
            </p>
            <p>
              Our focus is on building real skills. Whether you are curious about how AWS
              works, want to build your first cloud application, or are preparing for a
              certification, the community is a supportive environment to start and grow.
            </p>

            <div className="about__highlights">
              {highlights.map((item) => (
                <div key={item} className="about__highlight-item">
                  <span className="about__check" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__visual" aria-hidden="true">
            <AboutIllustration />
          </div>
        </div>

        {/* Pillars Intro */}
        <div className="about__pillars-intro">
          <div className="section-label">Our Pillars</div>
          <h3 className="section-heading" style={{ fontSize: '1.75rem' }}>
            What our community offers
          </h3>
        </div>

        {/* Three Pillars Cards */}
        <div className="about__pillars" aria-label="Community pillars">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`pillar-card pillar-card--${pillar.variant}`}
            >
              <div className={`icon-box icon-box-${pillar.variant}`}>
                {pillar.icon}
              </div>
              <h4 className="pillar-card__title">{pillar.title}</h4>
              <p className="pillar-card__desc">{pillar.description}</p>
              <button
                type="button"
                className="btn btn-ghost btn-sm pillar-card__cta"
                onClick={() => scrollTo(pillar.href)}
                aria-label={`${pillar.cta} — go to ${pillar.title} section`}
              >
                {pillar.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutIllustration() {
  const codeLines = [
    { y: 60, width: 120 },
    { y: 80, width: 80 },
    { y: 100, width: 140, accent: true },
    { y: 120, width: 60 },
    { y: 140, width: 100 },
    { y: 160, width: 90 },
  ]

  const dots = [80, 130, 180, 230, 280]

  return (
    <svg
      viewBox="0 0 360 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a6e" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
      </defs>

      {/* Background card container */}
      <rect x="20" y="20" width="320" height="260" rx="16" fill="url(#aboutGrad)" />

      {/* Editor Header Bar */}
      <circle cx="45" cy="42" r="4" fill="#ff5f56" />
      <circle cx="58" cy="42" r="4" fill="#ffbd2e" />
      <circle cx="71" cy="42" r="4" fill="#27c93f" />

      {/* Code lines */}
      {codeLines.map((line) => (
        <rect
          key={line.y}
          x="45"
          y={line.y + 15}
          width={line.width}
          height="8"
          rx="4"
          fill={line.accent ? 'rgba(255, 153, 0, 0.75)' : 'rgba(255, 255, 255, 0.15)'}
        />
      ))}

      {/* Cloud graphic top right */}
      <g transform="translate(240, 60)" opacity="0.85">
        <ellipse cx="20" cy="16" rx="20" ry="14" fill="rgba(0,168,232,0.6)" />
        <ellipse cx="8" cy="22" rx="12" ry="9" fill="rgba(0,168,232,0.6)" />
        <ellipse cx="32" cy="22" rx="12" ry="9" fill="rgba(0,168,232,0.6)" />
        <ellipse cx="20" cy="28" rx="18" ry="8" fill="rgba(0,168,232,0.6)" />
      </g>

      {/* Connecting dots bottom */}
      {dots.map((x, i) => (
        <circle
          key={`dot-${x}`}
          cx={x}
          cy={220}
          r={i === 2 ? 8 : 5}
          fill={i === 2 ? 'rgba(255,153,0,0.85)' : 'rgba(255,255,255,0.2)'}
        />
      ))}
      {dots.slice(0, -1).map((x, i) => (
        <line
          key={`line-${x}`}
          x1={x}
          y1={220}
          x2={dots[i + 1]}
          y2={220}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
          strokeDasharray="3 5"
        />
      ))}

      {/* Bottom badge element */}
      <rect x="140" y="244" width="80" height="16" rx="4" fill="rgba(255,153,0,0.2)" />
      <rect x="155" y="248" width="50" height="8" rx="3" fill="rgba(255,153,0,0.7)" />
    </svg>
  )
}

function WrenchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}
