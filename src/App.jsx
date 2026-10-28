import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import "./App.css";

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

        {/* Events Module Slot */}
        <section
          id="events"
          className="section-placeholder section-placeholder--dark"
          aria-label="Events and Workshops section"
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <CalendarIcon />
              </div>
              <span className="placeholder-card__badge">
                Feature In Progress
              </span>
              <h3 className="placeholder-card__title">
                Events &amp; Workshops
              </h3>
              <p className="placeholder-card__desc">
                Upcoming hands-on workshops, cloud bootcamps, and technical
                sessions at KLS GIT are currently being scheduled. Event
                listings and registration workflows will be available here soon.
              </p>
              <div className="placeholder-card__tagline">
                Module component slot: src/components/Events
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Module */}
        <Gallery />

        {/* Projects Module Slot */}
        <section
          id="projects"
          className="section-placeholder"
          aria-label="Student Projects section"
        ></section>

        {/* Projects Module Slot */}
        <section
          id="projects"
          className="section-placeholder"
          aria-label="Student Projects section"
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <CodeIcon />
              </div>
              <span className="placeholder-card__badge">
                Feature In Progress
              </span>
              <h3 className="placeholder-card__title">
                Featured Student Projects
              </h3>
              <p className="placeholder-card__desc">
                Showcasing innovative cloud architectures, serverless
                prototypes, AI integrations, and open-source tools developed by
                student builders at KLS Gogte Institute of Technology.
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
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <BookOpenIcon />
              </div>
              <span className="placeholder-card__badge">
                Feature In Progress
              </span>
              <h3 className="placeholder-card__title">Learning Resources</h3>
              <p className="placeholder-card__desc">
                Curated learning paths, AWS certification roadmaps, official
                whitepapers, and hands-on lab guides for students starting their
                cloud journey.
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
          className="section-placeholder"
          aria-label="Core Team Directory section"
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <CalendarIcon />
              </div>
              <span className="placeholder-card__badge">Feature In Progress</span>
              <h3 className="placeholder-card__title">Events &amp; Workshops</h3>
              <p className="placeholder-card__desc">
                Upcoming hands-on workshops, cloud bootcamps, and technical sessions at
                KLS GIT are currently being scheduled. Event listings and registration
                workflows will be available here soon.
              </p>
              <div className="placeholder-card__tagline">
                Module component slot: src/components/Events
              </div>
            </div>
          </div>
        </section>

        {/* Projects Module Slot */}
        <section
          id="projects"
          className="section-placeholder"
          aria-label="Student Projects section"
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <CodeIcon />
              </div>
              <span className="placeholder-card__badge">Feature In Progress</span>
              <h3 className="placeholder-card__title">Featured Student Projects</h3>
              <p className="placeholder-card__desc">
                Showcasing innovative cloud architectures, serverless prototypes, AI
                integrations, and open-source tools developed by student builders at KLS
                Gogte Institute of Technology.
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
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <BookOpenIcon />
              </div>
              <span className="placeholder-card__badge">Feature In Progress</span>
              <h3 className="placeholder-card__title">Learning Resources</h3>
              <p className="placeholder-card__desc">
                Curated learning paths, AWS certification roadmaps, official whitepapers,
                and hands-on lab guides for students starting their cloud journey.
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
          className="section-placeholder"
          aria-label="Core Team Directory section"
        >
          <div className="container">
            <div className="placeholder-card">
              <div className="placeholder-card__icon" aria-hidden="true">
                <UsersIcon />
              </div>
              <span className="placeholder-card__badge">Feature In Progress</span>
              <h3 className="placeholder-card__title">Core Team Directory</h3>
              <p className="placeholder-card__desc">
                Meet the faculty coordinator and student leaders driving the AWS Student
                Builder Group at KLS GIT.
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
  );
}

function CalendarIcon() {
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
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function CodeIcon() {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BookOpenIcon() {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function UsersIcon() {
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
