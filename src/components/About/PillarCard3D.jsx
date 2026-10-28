import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import GLBModelViewer from '../3d/GLBModelViewer'

export default function PillarCard3D({ pillar, onCtaClick }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })

  // Motion values for smooth 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for buttery responsiveness
  const springConfig = { damping: 18, stiffness: 180 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setSpotlightPos({ x, y })
    mouseX.set(x / rect.width - 0.5)
    mouseY.set(y / rect.height - 0.5)
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const accentColor =
    pillar.type === 'events'
      ? 'rgba(0, 168, 225, 0.4)'
      : pillar.type === 'learning'
      ? 'rgba(140, 79, 255, 0.4)'
      : 'rgba(255, 153, 0, 0.4)'

  return (
    <div
      ref={cardRef}
      className="pillar-card-3d-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`pillar-card-3d pillar-card-3d--${pillar.variant}`}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Dynamic Cursor-Tracking Radial Spotlight */}
        <div
          className="pillar-card-3d__spotlight"
          style={{
            background: `radial-gradient(420px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${accentColor}, transparent 75%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* 3D GLB Model Viewer Header (h-48 / 192px) */}
        <div className="pillar-card-3d__canvas-wrap h-48">
          <GLBModelViewer
            modelPath={pillar.modelPath}
            interactive={false}
            scale={pillar.modelScale || 1.15}
            cameraPosition={[3.2, 2.4, 3.5]}
          />
        </div>

        {/* Card Content */}
        <div className="pillar-card-3d__content">
          <div className="pillar-card-3d__tag">
            <span className="pillar-card-3d__dot" />
            <span>{pillar.tag}</span>
          </div>

          <h4 className="pillar-card-3d__title">{pillar.title}</h4>
          <p className="pillar-card-3d__desc">{pillar.description}</p>

          <button
            type="button"
            className="pillar-card-3d__cta"
            onClick={() => onCtaClick(pillar.href)}
            aria-label={`${pillar.cta} — go to ${pillar.title} section`}
          >
            <span>{pillar.cta}</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
