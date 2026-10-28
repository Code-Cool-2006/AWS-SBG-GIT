import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import HolographicBlueprint from './components/About/HolographicBlueprint'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <>
      {/* Accessible skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Primary Navigation */}
      <Navbar />

      {/* Main Homepage Flow */}
      <main id="main-content" className="homepage-main">
        {/* Polished Hero Section */}
        <Hero />

        {/* About the Community & Core Pillars */}
        <About />

        {/* ─── Teammate Module Integration Slots ─────────────────────── */}
        {/* Clean anchors so other branch developers can drop in their components */}

        {/* Events Module Slot: 3D Holographic Blueprint */}
        <section
          id="events"
          className="section-placeholder section-placeholder--dark"
          aria-label="Events and Workshops section"
          style={{ background: '#090D16' }}
        >
          <div className="container">
            <HolographicBlueprint />
          </div>
        </section>

        {/* Projects Module Slot */}
        <section
          id="projects"
          className="section-placeholder section-placeholder--dark"
          aria-label="Student Projects section"
          style={{ background: '#090D16' }}
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <img src="/aws-icons/lambda.svg" alt="AWS Lambda" width={32} height={32} />
              </div>
              <span className="placeholder-card__badge">AWS Student Builders</span>
              <h3 className="placeholder-card__title">Featured Student Projects</h3>
              <p className="placeholder-card__desc">
                Showcasing innovative cloud architectures, serverless prototypes, AI
                integrations, and open-source tools developed by student builders at KLS
                Gogte Institute of Technology using AWS services.
              </p>
              <div className="placeholder-card__tagline">
                Module component slot: src/components/Projects
              </div>
            </div>
          </div>
        </section>

        {/* Learning Resources Module Slot */}
        <section
          id="learning"
          className="section-placeholder section-placeholder--dark"
          aria-label="Learning Resources section"
          style={{ background: '#090D16' }}
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <img src="/aws-icons/cloudformation.svg" alt="AWS Architecture" width={32} height={32} />
              </div>
              <span className="placeholder-card__badge">AWS Skill Builder</span>
              <h3 className="placeholder-card__title">Learning Resources &amp; Certifications</h3>
              <p className="placeholder-card__desc">
                Curated learning paths, AWS certification roadmaps (Cloud Practitioner, Solutions Architect),
                official whitepapers, and hands-on lab guides for students starting their cloud journey.
              </p>
              <div className="placeholder-card__tagline">
                Module component slot: src/components/Learning
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Module Slot */}
        <section
          id="team"
          className="section-placeholder section-placeholder--dark"
          aria-label="Core Team Directory section"
          style={{ background: '#090D16' }}
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <img src="/aws-icons/iam.svg" alt="AWS IAM Community" width={32} height={32} />
              </div>
              <span className="placeholder-card__badge">AWS Community Leaders</span>
              <h3 className="placeholder-card__title">Core Team Directory</h3>
              <p className="placeholder-card__desc">
                Meet the faculty coordinator and student leaders driving the AWS Student
                Builder Group at KLS GIT Belagavi.
              </p>
              <div className="placeholder-card__tagline">
                Module component slot: src/components/Team
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <Footer />
    </>
  )
}
