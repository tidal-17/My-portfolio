import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import './Home.css'

function DNAHelix() {
  const groupRef = useRef()
  const strandCount = 20

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.3
  })

  const parts = []
  for (let i = 0; i < strandCount; i++) {
    const angle = i * 0.4
    const y = i * 0.3 - (strandCount * 0.3) / 2

    const p1 = new THREE.Vector3(Math.sin(angle) * 1.2, y, Math.cos(angle) * 1.2)
    const p2 = new THREE.Vector3(Math.sin(angle + Math.PI) * 1.2, y, Math.cos(angle + Math.PI) * 1.2)

    const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5)
    const direction = new THREE.Vector3().subVectors(p2, p1)
    const length = direction.length()
    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize()
    )

    parts.push(
      <mesh key={`a-${i}`} position={p1}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#93c5fd" />
      </mesh>,
      <mesh key={`b-${i}`} position={p2}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#f0abfc" />
      </mesh>,
      <mesh key={`rung-${i}`} position={mid} quaternion={quaternion}>
        <cylinderGeometry args={[0.02, 0.02, length, 8]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
    )
  }

  return <group ref={groupRef}>{parts}</group>
}

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-canvas">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <DNAHelix />
        </Canvas>
      </div>

      <div className="home-text">
        <h1>Vatsin Khakhar</h1>
        <p>IB MYP 4 Student | Aspiring Surgeon & Coder</p>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About section">
      <span>Scroll down</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
     </a>
    </section>
  )
}
export default Home



