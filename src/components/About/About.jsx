import { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import GLBModelViewer from '../3d/GLBModelViewer'
import PillarCard3D from './PillarCard3D'
import './About.css'

const PILLARS_DATA = [
  {
    type: 'projects',
    variant: 'orange',
    tag: 'Cloud Innovation',
    title: 'Projects & Building',
    description:
      'Members collaborate on cloud-based applications, software tools, AI experiments, and data projects — developing skills by building things that actually work.',
    cta: 'View Projects',
    href: '#projects',
    modelPath: '/models/pillar_projects.glb',
    modelScale: 1.0,
  },
  {
    type: 'events',
    variant: 'blue',
    tag: 'Workshops & Hackathons',
    title: 'Events & Workshops',
    description:
      'We host hands-on technical sessions, learning workshops, coding activities, and collaborative events throughout the academic year.',
    cta: 'See Events',
    href: '#events',
    modelPath: '/models/pillar_events.glb',
    modelScale: 0.9,
  },
  {
    type: 'learning',
    variant: 'purple',
    tag: 'Certifications & Labs',
    title: 'Learning & Skill Building',
    description:
      'From cloud fundamentals to core AWS services, we point members to quality resources that help build practical, applicable cloud skills.',
    cta: 'Explore Resources',
    href: '#learning',
    modelPath: '/models/pillar_learning.glb',
    modelScale: 1.0,
  },
]

const HIGHLIGHTS = [
  {
    id: 0,
    title: 'Hands-on technical sessions',
    badge: 'Amazon EC2',
    icon: '/aws-icons/ec2.svg',
    desc: 'Live labs and interactive architecture walkthroughs with AWS Compute',
  },
  {
    id: 1,
    title: 'Collaborative project work',
    badge: 'AWS Lambda',
    icon: '/aws-icons/lambda.svg',
    desc: 'Team sprints building production-ready serverless tools',
  },
  {
    id: 2,
    title: 'Cloud skill development',
    badge: 'Amazon S3',
    icon: '/aws-icons/s3.svg',
    desc: 'Guided roadmaps from Cloud Practitioner to Solutions Architect',
  },
  {
    id: 3,
    title: 'Peer knowledge sharing',
    badge: 'DynamoDB',
    icon: '/aws-icons/dynamodb.svg',
    desc: 'Weekly tech talks, code reviews, and student showcases',
  },
  {
    id: 4,
    title: 'Developer community culture',
    badge: 'CloudFormation',
    icon: '/aws-icons/cloudformation.svg',
    desc: 'A thriving ecosystem of curious student builders and innovators',
  },
]

export default function About() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="about" className="about section-about" aria-label="About the community">
      {/* Dynamic Background Spatial Glows */}
      <div className="about__ambient-glow about__ambient-glow--orange" aria-hidden="true" />
      <div className="about__ambient-glow about__ambient-glow--cyan" aria-hidden="true" />
      <div className="about__grid-overlay" aria-hidden="true" />

      <div className="container about__container">
        {/* Section Intro */}
        <div className="about__intro">
          <div className="about__eyebrow">
            <span className="about__eyebrow-dash">—</span> ABOUT THE COMMUNITY
          </div>
          <h2 className="section-heading about__heading">
            A student community for{' '}
            <span className="about__heading-glow">builders and learners</span>
          </h2>
          <p className="about__sub">
            The AWS Student Builder Group at KLS Gogte Institute of Technology is a
            student-run community at the intersection of cloud computing, software
            development, and hands-on learning. We are a space for students who want
            to understand modern technology by working with it — not just studying it.
          </p>
        </div>

        {/* Section 1: 50/50 Split Layout - Text & Interactive 3D Cloud Core */}
        <div className="about__body">
          {/* Left Column: Enhanced Typography & Interactive Glassmorphic Capsules */}
          <div className="about__text-block">
            <h3 className="about__sub-title">What We Do</h3>
            <p className="about__paragraph">
              We organise technical workshops and learning events that give students
              direct, practical exposure to cloud services and developer tools. Members
              collaborate on projects, share knowledge, and support each other&apos;s
              growth throughout the academic year.
            </p>
            <p className="about__paragraph">
              Our focus is on building real skills. Whether you are curious about how AWS
              works, want to build your first cloud application, or are preparing for a
              certification, the community is a supportive environment to start and grow.
            </p>

            {/* 5 Interactive Glassmorphic Capsule Items */}
            <div
              className="about__capsules"
              role="list"
              aria-label="Community focus highlights"
            >
              {HIGHLIGHTS.map((item) => {
                const isActive = activeFeatureIndex === item.id
                return (
                  <div
                    key={item.id}
                    role="listitem"
                    className={`about__capsule ${isActive ? 'about__capsule--active' : ''}`}
                    onMouseEnter={() => setActiveFeatureIndex(item.id)}
                    onClick={() => setActiveFeatureIndex(item.id)}
                    tabIndex={0}
                    onFocus={() => setActiveFeatureIndex(item.id)}
                    aria-label={`${item.title} - highlights focus area`}
                  >
                    <div className="about__capsule-indicator">
                      <img
                        src={item.icon}
                        alt={item.badge}
                        width={20}
                        height={20}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>

                    <div className="about__capsule-text">
                      <div className="about__capsule-header">
                        <span className="about__capsule-title">{item.title}</span>
                        <span className="about__capsule-badge">{item.badge}</span>
                      </div>
                      <span className="about__capsule-desc">{item.desc}</span>
                    </div>

                    <div className="about__capsule-laser" aria-hidden="true" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Interactive 3D AWS Cloud Core (.glb model) */}
          <div className="about__visual-3d" aria-label="Interactive 3D AWS Cloud Core visualizer">
            <div className="about__canvas-frame h-[420px]">
              <GLBModelViewer
                modelPath="/models/aws_cloud_core.glb"
                interactive={true}
                scale={1.1}
                cameraPosition={[3.2, 2.4, 3.5]}
              />

              {/* Drag Prompt Hint */}
              <div className="canvas-drag-hint">
                <img src="/aws-icons/aws-white.svg" alt="AWS" width={18} />
                <span>Drag to rotate 3D AWS Cloud Core</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Pillars Intro */}
        <div className="about__pillars-intro">
          <div className="about__eyebrow">
            <span className="about__eyebrow-dash">—</span> OUR PILLARS
          </div>
          <h3 className="section-heading about__pillars-heading">
            What our community offers
          </h3>
          <p className="about__pillars-sub">
            Three foundational cornerstones powering student builder excellence, real-world
            experimentation, and industry-grade engineering habits.
          </p>
        </div>

        {/* Section 2: Three 3D Spatial Tilt Pillar Cards with Custom 3D Models */}
        <div className="about__pillars-grid" aria-label="Community pillars">
          {PILLARS_DATA.map((pillar) => (
            <PillarCard3D
              key={pillar.title}
              pillar={pillar}
              onCtaClick={scrollTo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Preload all 4 custom 3D models for instant, seamless rendering
useGLTF.preload('/models/aws_cloud_core.glb')
useGLTF.preload('/models/pillar_projects.glb')
useGLTF.preload('/models/pillar_events.glb')
useGLTF.preload('/models/pillar_learning.glb')
