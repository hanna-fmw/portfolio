import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import { BrightnessContrast } from '@react-three/postprocessing'
import { Float } from '@react-three/drei'

function Sphere({ logo }) {
	const texture = useLoader(TextureLoader, logo)

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<mesh castShadow receiveShadow scale={2.75}>
				<ambientLight intensity={0.25} />
				<directionalLight position={[0, 0, 0.05]} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
				<icosahedronGeometry args={[0.8, 1]} />
				<meshStandardMaterial color='#fff8eb' map={texture} polygonOffset polygonOffsetFactor={-5} flatShading />
			</mesh>
		</Float>
	)
}

function Scene({ logo }) {
	return (
		<Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
			<spotLight position={[10, 10, 10]} angle={0.15} />
			<Suspense fallback={null}>
				<Sphere logo={logo} />
			</Suspense>
			<OrbitControls autoRotate autoRotateSpeed={25} enableZoom={false} />
		</Canvas>
	)
}

// function Sphere({ logo }) {
// 	const texture = useLoader(TextureLoader, logo) // Load the texture

// 	return (
// 		<group>
// 			{/* <mesh scale={2.75}>
// 				<sphereGeometry args={[0.5, 32, 32]} />
// 				<meshStandardMaterial color='#ffffff' />
// 			</mesh> */}
// 			<mesh castShadow receiveShadow scale={2.75}>
// 				<ambientLight intensity={0.1} />
// 				<directionalLight position={[0, 0, 0.05]} />
// 				<sphereGeometry args={[0.7, 32, 32]} />
// 				<meshStandardMaterial map={texture} roughness={0.5} />
// 			</mesh>
// 		</group>
// 	)
// }

// function Scene({ logo }) {
// 	return (
// 		<Canvas>
// 			<ambientLight intensity={0.2} />
// 			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
// 			<Suspense fallback={null}>
// 				<Sphere logo={logo} />
// 			</Suspense>
// 			<OrbitControls autoRotate autoRotateSpeed={35} enableZoom={false} />
// 		</Canvas>
// 	)
// }

export default Scene
