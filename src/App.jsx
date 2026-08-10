import { Canvas } from '@react-three/fiber'

function Box() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 20, 10]} />
      <Box />
    </Canvas>
  )
}
export default App