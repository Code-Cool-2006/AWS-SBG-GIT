import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

// Mini 3D Wireframe Blueprint Beacon with AWS Branding
function BlueprintWireframeBeacon() {
  const meshRef = useRef()
  const ringRef = useRef()

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 1.2
      meshRef.current.rotation.x = Math.sin(t * 1.5) * 0.2
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.8
      ringRef.current.rotation.x = Math.cos(t * 1.2) * 0.25
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Wireframe Rotating Cube */}
      <mesh ref={meshRef}>
        <boxGeometry args={[1.3, 1.3, 1.3]} />
        <meshBasicMaterial color="#FF9900" wireframe transparent opacity={0.85} />
      </mesh>

      {/* Floating AWS Official Logo Inside 3D Beacon */}
      <Html center transform position={[0, 0, 0]} pointerEvents="none" distanceFactor={1.3}>
        <div className="blueprint-3d-aws-core">
          <img src="/aws-icons/aws-white.svg" alt="AWS Cloud" width={38} />
        </div>
      </Html>

      {/* Inner Glowing Core */}
      <mesh>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#00A8E1"
          emissive="#00A8E1"
          emissiveIntensity={2.5}
        />
      </mesh>

      {/* Outer Cyan Horizon Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.6, 0.04, 12, 36]} />
        <meshBasicMaterial color="#00A8E1" transparent opacity={0.6} />
      </mesh>

      <ambientLight intensity={0.8} />
      <pointLight color="#FF9900" intensity={3} />
    </group>
  )
}

export default function HolographicBlueprint() {
  return (
    <div className="holographic-blueprint-container">
      {/* Animated Glowing Laser Scanning Line */}
      <div className="blueprint-laser-scanner" aria-hidden="true">
        <div className="blueprint-laser-beam" />
        <div className="blueprint-laser-glow" />
      </div>

      {/* Corner Cybernetic Brackets */}
      <div className="blueprint-corner blueprint-corner--tl" aria-hidden="true" />
      <div className="blueprint-corner blueprint-corner--tr" aria-hidden="true" />
      <div className="blueprint-corner blueprint-corner--bl" aria-hidden="true" />
      <div className="blueprint-corner blueprint-corner--br" aria-hidden="true" />

      {/* Glowing Dynamic SVG Outline Border */}
      <svg
        className="blueprint-svg-border"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="18"
          fill="none"
          stroke="url(#blueprintBorderGrad)"
          strokeWidth="1.5"
          strokeDasharray="12 8"
        />
        <defs>
          <linearGradient id="blueprintBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9900" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#00A8E1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF9900" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>

      <div className="blueprint-body">
        {/* 3D Wireframe Beacon Canvas */}
        <div className="blueprint-beacon-wrap" aria-hidden="true">
          <Canvas
            camera={{ position: [0, 0, 3.8], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <BlueprintWireframeBeacon />
          </Canvas>
        </div>

        {/* Status Chips */}
        <div className="blueprint-header-chips">
          <span className="blueprint-chip blueprint-chip--pulse">
            <span className="blueprint-chip__dot" />
            AWS Student Builder Community
          </span>
          <span className="blueprint-chip blueprint-chip--tech">
            FEATURE: EVENTS &amp; WORKSHOPS DISPATCHER
          </span>
        </div>

        {/* Title */}
        <h3 className="blueprint-title">Events &amp; Workshops</h3>

        {/* Copy */}
        <p className="blueprint-desc">
          Upcoming hands-on workshops, cloud bootcamps, and technical sessions at
          KLS GIT are currently being scheduled. Event listings and registration
          workflows will be available here soon.
        </p>

        {/* Telemetry Footer */}
        <div className="blueprint-footer">
          <div className="blueprint-telemetry-item">
            <span className="blueprint-k">MODULE SLOT:</span>
            <span className="blueprint-v">src/components/Events</span>
          </div>
          <div className="blueprint-telemetry-divider">/</div>
          <div className="blueprint-telemetry-item">
            <span className="blueprint-k">CAMPUS:</span>
            <span className="blueprint-v">KLS GIT Belagavi</span>
          </div>
          <div className="blueprint-telemetry-divider">/</div>
          <div className="blueprint-telemetry-item">
            <span className="blueprint-k">AWS REGION:</span>
            <span className="blueprint-v blueprint-v--live">ap-south-1 (Mumbai)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
