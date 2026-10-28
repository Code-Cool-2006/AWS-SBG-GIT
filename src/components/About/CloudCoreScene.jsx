import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, Sparkles, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

// 5 Orbiting AWS Service Nodes corresponding to the 5 Community Highlights:
// 0: Hands-on technical sessions (AWS EC2 Compute Core)
// 1: Collaborative project work (AWS Lambda Serverless Hub)
// 2: Cloud skill development (AWS S3 & Cloud Architecture)
// 3: Peer knowledge sharing (Amazon DynamoDB & Data Mesh)
// 4: Developer community culture (AWS CloudFormation & Builder Infrastructure)

const SATELLITE_CONFIGS = [
  {
    name: 'EC2 Compute',
    service: 'EC2',
    icon: '/aws-icons/ec2.svg',
    type: 'torus',
    baseRadius: 2.5,
    speed: 0.45,
    tilt: 0.25,
    color: '#FF9900',
    activeColor: '#FFB84D',
    scale: 0.38,
  },
  {
    name: 'Lambda Serverless',
    service: 'Lambda',
    icon: '/aws-icons/lambda.svg',
    type: 'octahedron',
    baseRadius: 2.7,
    speed: 0.35,
    tilt: -0.3,
    color: '#FF9900',
    activeColor: '#FFA500',
    scale: 0.42,
  },
  {
    name: 'S3 Cloud Storage',
    service: 'S3',
    icon: '/aws-icons/s3.svg',
    type: 'cylinder',
    baseRadius: 2.4,
    speed: 0.5,
    tilt: 0.4,
    color: '#00A8E1',
    activeColor: '#33BDFF',
    scale: 0.36,
  },
  {
    name: 'DynamoDB Mesh',
    service: 'DynamoDB',
    icon: '/aws-icons/dynamodb.svg',
    type: 'sphere',
    baseRadius: 2.8,
    speed: 0.3,
    tilt: -0.15,
    color: '#00A8E1',
    activeColor: '#FF9900',
    scale: 0.38,
  },
  {
    name: 'CloudFormation',
    service: 'IaC',
    icon: '/aws-icons/cloudformation.svg',
    type: 'dodecahedron',
    baseRadius: 2.6,
    speed: 0.4,
    tilt: 0.35,
    color: '#FF9900',
    activeColor: '#00A8E1',
    scale: 0.4,
  },
]

// Central AWS Cloud Server / Builder Core
function CentralCore({ activeIndex }) {
  const cubeRef = useRef()
  const wireframeRef = useRef()
  const innerIcosaRef = useRef()
  const ringRef = useRef()

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    // Smooth gentle rotation of outer server chassis
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.35
      cubeRef.current.rotation.x = Math.sin(t * 0.5) * 0.1
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.2
      wireframeRef.current.rotation.z = Math.cos(t * 0.4) * 0.08
    }

    // Inner glowing core pulses
    if (innerIcosaRef.current) {
      innerIcosaRef.current.rotation.y += delta * 1.2
      innerIcosaRef.current.rotation.x += delta * 0.8
      const pulse = 1 + Math.sin(t * 3.5) * 0.12 + (activeIndex !== null ? 0.15 : 0)
      innerIcosaRef.current.scale.set(pulse, pulse, pulse)
    }

    // Horizontal orbital halo ring
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.25
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Metallic Dark Cube */}
      <mesh ref={cubeRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#081426"
          roughness={0.15}
          metalness={0.88}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Outer Wireframe Accent Cube */}
      <mesh ref={wireframeRef}>
        <boxGeometry args={[1.65, 1.65, 1.65]} />
        <meshBasicMaterial
          color={activeIndex !== null ? '#FF9900' : '#00A8E1'}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Floating AWS Brand Crest on Front of Server Cube */}
      <Html
        transform
        distanceFactor={1.3}
        position={[0, 0, 0.82]}
        pointerEvents="none"
      >
        <div className="aws-3d-server-badge">
          <img
            src="/aws-icons/aws-white.svg"
            alt="AWS Core"
            width={72}
            style={{
              filter: 'drop-shadow(0 0 12px rgba(255, 153, 0, 0.6))',
              opacity: 0.95,
            }}
          />
        </div>
      </Html>

      {/* Inner Glowing AWS Orange Core */}
      <mesh ref={innerIcosaRef}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#FF9900"
          emissive="#FF9900"
          emissiveIntensity={activeIndex !== null ? 3.2 : 2.0}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Core Point Light for dynamic inner radiance */}
      <pointLight
        color="#FF9900"
        intensity={activeIndex !== null ? 6 : 3.5}
        distance={6}
      />

      {/* Orbital Halo Ring */}
      <mesh ref={ringRef} rotation={[-Math.PI / 2.3, 0.1, 0]}>
        <ringGeometry args={[1.9, 2.02, 64]} />
        <meshBasicMaterial
          color="#FF9900"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

// Single Orbiting AWS Service Node
function SatelliteNode({ config, index, activeIndex, onHover }) {
  const meshRef = useRef()
  const lineRef = useRef()
  const pulseRef = useRef()
  const isActive = activeIndex === index

  const initialAngle = (index / SATELLITE_CONFIGS.length) * Math.PI * 2

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    const speedMult = isActive ? 1.8 : 1.0
    const angle = initialAngle + t * config.speed * speedMult * 0.6

    // Orbit coordinates in tilted 3D plane
    const x = Math.cos(angle) * config.baseRadius
    const z = Math.sin(angle) * config.baseRadius
    const y = Math.sin(angle + config.tilt) * 0.9 * config.tilt * 2.5

    if (meshRef.current) {
      meshRef.current.position.set(x, y, z)
      meshRef.current.rotation.x += delta * (isActive ? 3 : 1)
      meshRef.current.rotation.y += delta * (isActive ? 3.5 : 1.2)

      // Lerp scale
      const targetScale = isActive ? config.scale * 1.6 : config.scale
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.12
      )
    }

    // Update connecting beam to center [0,0,0]
    if (lineRef.current) {
      const positions = lineRef.current.geometry.attributes.position.array
      positions[0] = 0
      positions[1] = 0
      positions[2] = 0
      positions[3] = x
      positions[4] = y
      positions[5] = z
      lineRef.current.geometry.attributes.position.needsUpdate = true
    }

    // Animated data pulse traveling towards the center along the vector
    if (pulseRef.current) {
      const pulseProgress = (t * (isActive ? 2.8 : 1.2) + index * 0.2) % 1
      pulseRef.current.position.set(
        x * (1 - pulseProgress),
        y * (1 - pulseProgress),
        z * (1 - pulseProgress)
      )
      const pScale = isActive ? 0.12 : 0.06
      pulseRef.current.scale.set(pScale, pScale, pScale)
    }
  })

  // Buffer geometry for dynamic line
  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    const positions = new Float32Array([0, 0, 0, 0, 0, 0])
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geom
  }, [])

  const color = isActive ? config.activeColor : config.color

  return (
    <group>
      {/* Dynamic Laser Beam to Core */}
      <line ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={isActive ? 0.85 : 0.22}
          linewidth={isActive ? 2 : 1}
        />
      </line>

      {/* Traveling Data Pulse */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial
          color={isActive ? '#FF9900' : '#00A8E1'}
          transparent
          opacity={isActive ? 0.95 : 0.5}
        />
      </mesh>

      {/* The 3D Geometric Satellite with official AWS Service Icon */}
      <group
        ref={meshRef}
        onPointerOver={() => onHover && onHover(index)}
        onPointerOut={() => onHover && onHover(null)}
      >
        <mesh cursor="pointer">
          {config.type === 'torus' && (
            <torusGeometry args={[0.5, 0.2, 16, 32]} />
          )}
          {config.type === 'octahedron' && (
            <octahedronGeometry args={[0.65, 0]} />
          )}
          {config.type === 'cylinder' && (
            <cylinderGeometry args={[0.42, 0.42, 0.75, 16]} />
          )}
          {config.type === 'sphere' && (
            <sphereGeometry args={[0.55, 24, 24]} />
          )}
          {config.type === 'dodecahedron' && (
            <dodecahedronGeometry args={[0.55, 0]} />
          )}

          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={isActive ? 2.5 : 0.6}
            roughness={0.25}
            metalness={0.8}
            wireframe={config.type === 'octahedron' || config.type === 'dodecahedron' ? !isActive : false}
          />
        </mesh>

        {/* 3D Floating AWS Service Badge */}
        <Html
          transform
          distanceFactor={1.5}
          position={[0, 0.65, 0]}
          pointerEvents="none"
          center
        >
          <div className={`aws-3d-service-tag ${isActive ? 'aws-3d-service-tag--active' : ''}`}>
            <img
              src={config.icon}
              alt={config.name}
              width={18}
              height={18}
              style={{ objectFit: 'contain' }}
            />
            <span>{config.service}</span>
          </div>
        </Html>
      </group>
    </group>
  )
}

// 3D Holographic Terminal Window Floating beside the Server Core
function HolographicTerminal({ activeIndex }) {
  const activeTitle =
    activeIndex !== null
      ? [
          'AWS EC2 & Hands-on Labs',
          'AWS Lambda Serverless Sprints',
          'S3 & Cloud Architecture',
          'DynamoDB Data Mesh',
          'CloudFormation & Builder Culture',
        ][activeIndex]
      : 'AWS SBG Cloud Cluster'

  return (
    <Html
      transform
      distanceFactor={1.35}
      position={[1.5, -0.3, 1.0]}
      rotation={[0.08, -0.3, 0.04]}
      className="terminal-hologram-wrapper"
    >
      <div className="terminal-hologram">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="terminal-brand-flex">
            <img src="/aws-icons/aws-white.svg" alt="AWS" width={28} />
            <span className="terminal-title">aws-sbg-kls-git ~/cloud-core</span>
          </div>
          <span className="terminal-badge">LIVE</span>
        </div>

        {/* Terminal Body */}
        <div className="terminal-content">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cmd">aws.cluster.status(&apos;ap-south-1&apos;)</span>
          </div>
          <div className="terminal-status-row">
            <span className="terminal-metric-label">COMMUNITY:</span>
            <span className="terminal-metric-val">AWS SBG KLS GIT</span>
            <span className="terminal-metric-ping">18ms</span>
          </div>
          <div className="terminal-status-row">
            <span className="terminal-metric-label">ACTIVE WORKLOAD:</span>
            <span className="terminal-highlight-val">{activeTitle}</span>
          </div>

          {/* Progress / Telemetry Bar */}
          <div className="terminal-progress-track">
            <div
              className="terminal-progress-fill"
              style={{
                width: activeIndex !== null ? `${(activeIndex + 1) * 20}%` : '85%',
              }}
            />
          </div>

          {/* Hologram Footer Stats */}
          <div className="terminal-footer">
            <span>REGION: ap-south-1 (Mumbai)</span>
            <span className="terminal-nodes-count">NODES: 5/5 OPERATIONAL</span>
          </div>
        </div>
      </div>
    </Html>
  )
}

// Perspective Floor Grid for 3D depth
function PerspectiveGrid() {
  return (
    <group position={[0, -2.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper
        args={[16, 24, '#FF9900', '#102544']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

// Main 3D Canvas Scene
export default function CloudCoreScene({ activeFeatureIndex, onNodeHover }) {
  return (
    <div className="cloud-core-canvas-container">
      <Canvas
        camera={{ position: [0, 0.6, 5.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Studio Lighting */}
        <ambientLight intensity={0.65} />
        <directionalLight position={[6, 8, 5]} intensity={1.4} />
        <pointLight position={[-4, 2, -2]} color="#00A8E1" intensity={4} distance={12} />
        <pointLight position={[4, -2, 2]} color="#FF9900" intensity={4.5} distance={12} />

        {/* Subtle Ambient Sparkles in AWS Colors */}
        <Sparkles count={40} scale={7} size={2.5} speed={0.35} color="#FF9900" />
        <Sparkles count={40} scale={7} size={2} speed={0.4} color="#00A8E1" />

        {/* Perspective Grid Floor */}
        <PerspectiveGrid />

        {/* Smooth Interactive Presentation Controls */}
        <PresentationControls
          global
          zoom={0.9}
          rotation={[0.1, -0.15, 0]}
          polar={[-Math.PI / 7, Math.PI / 7]}
          azimuth={[-Math.PI / 5, Math.PI / 5]}
          config={{ mass: 1.5, tension: 170, friction: 26 }}
        >
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
            {/* Central Cloud Core with AWS Logo */}
            <CentralCore activeIndex={activeFeatureIndex} />

            {/* 5 Orbiting AWS Service Nodes */}
            {SATELLITE_CONFIGS.map((config, index) => (
              <SatelliteNode
                key={config.name}
                config={config}
                index={index}
                activeIndex={activeFeatureIndex}
                onHover={onNodeHover}
              />
            ))}

            {/* Floating 3D Holographic Code Window */}
            <HolographicTerminal activeIndex={activeFeatureIndex} />
          </Float>
        </PresentationControls>
      </Canvas>

      {/* Floating Drag Prompt Indicator */}
      <div className="canvas-drag-hint">
        <img src="/aws-icons/aws-white.svg" alt="AWS" width={18} />
        <span>Drag to rotate 3D AWS Builder Core</span>
      </div>
    </div>
  )
}
