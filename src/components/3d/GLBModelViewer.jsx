import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Float, OrbitControls, Center } from '@react-three/drei'
import * as THREE from 'three'

function Model({ url, scale = 1 }) {
  const { scene } = useGLTF(url)
  // Clone scene so multiple viewers never steal or conflict over shared nodes
  const clone = useMemo(() => scene.clone(true), [scene])
  const groupRef = useRef()

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.45
    }
  })

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={clone} scale={scale} />
      </Center>
    </group>
  )
}

export default function GLBModelViewer({
  modelPath,
  interactive = false,
  scale = 1,
  cameraPosition = [3.2, 2.4, 3.5],
  className = '',
  style = {},
}) {
  return (
    <Canvas
      camera={{ position: cameraPosition, fov: 40 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.35,
      }}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: interactive ? 'auto' : 'none',
        ...style,
      }}
    >
      {/* Studio lighting for rich metallic titanium & neon emissive luster */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 6, 4]} color="#FF9900" intensity={2.6} />
      <directionalLight position={[-5, 4, -4]} color="#00A8E1" intensity={2.2} />
      <pointLight position={[0, 3, 0]} color="#FFFFFF" intensity={1.5} />

      <Environment preset="city" />

      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
          <Model url={modelPath} scale={scale} />
        </Float>
      </Suspense>

      {interactive && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      )}
    </Canvas>
  )
}
