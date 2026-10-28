import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Center, Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Loads the GLTF/GLB arcade control panel model and centers it at (0, 0, 0).
 */
function ArcadeControlPanelModel({ url = '/models/arcade_control_panel.glb', autoRotate = false }) {
  const { scene } = useGLTF(url)
  const groupRef = useRef()

  return (
    <group ref={groupRef}>
      {/* <Center> automatically computes the bounding box and offsets the model to (0,0,0) */}
      <Center top>
        <primitive object={scene} />
      </Center>
    </group>
  )
}

/**
 * ArcadeControlPanelViewerR3F
 * Renders the 3D Arcade Control Panel using React Three Fiber with:
 * - Studio and neon rim lighting
 * - OrbitControls for rotation, zoom, and inspection
 * - Centered model positioning
 * - Contact shadows for realistic grounding
 */
export default function ArcadeControlPanelViewerR3F({
  modelUrl = '/models/arcade_control_panel.glb',
  className = '',
  style = { width: '100%', height: '500px' },
  cameraPosition = [0, 2.2, 4.2],
}) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 40%, #1e1333 0%, #0a0612 100%)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(168, 85, 247, 0.15)',
        ...style,
      }}
    >
      <Canvas
        camera={{ position: cameraPosition, fov: 42 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
      >
        {/* Ambient fill */}
        <ambientLight intensity={0.7} />

        {/* Primary Key Light */}
        <directionalLight position={[4, 6, 4]} intensity={2.0} color="#ffffff" castShadow />

        {/* Purple / Magenta Arcade Neon Rim Light */}
        <directionalLight position={[-5, 3, -3]} intensity={1.6} color="#c084fc" />

        {/* Cyan Arcade Glow Accent */}
        <pointLight position={[0, 2.5, 2]} intensity={1.8} color="#38bdf8" distance={8} />

        {/* Bottom soft bounce light */}
        <pointLight position={[0, -1, 1]} intensity={0.5} color="#ec4899" />

        {/* Interactive OrbitControls for 360 inspection */}
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.05}
          minDistance={1.8}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2 + 0.1}
          autoRotate={false}
        />

        {/* Centered 3D Model with ground contact shadow */}
        <Suspense fallback={null}>
          <ArcadeControlPanelModel url={modelUrl} />
          <ContactShadows
            position={[0, -0.05, 0]}
            opacity={0.75}
            scale={6.5}
            blur={2}
            far={3.5}
            color="#000000"
          />
        </Suspense>
      </Canvas>

      {/* Control Help HUD */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '6px 14px',
          background: 'rgba(10, 6, 18, 0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          borderRadius: '20px',
          color: '#e2e8f0',
          fontFamily: 'monospace',
          fontSize: '11px',
          letterSpacing: '0.05em',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        CLICK & DRAG TO ROTATE · SCROLL TO ZOOM
      </div>
    </div>
  )
}

useGLTF.preload('/models/arcade_control_panel.glb')
