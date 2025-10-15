import { Canvas, useFrame, RootState } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { easing } from 'maath'
import { suspend } from 'suspend-react'
import { Instances, Computers } from './Computers'
import { useControls } from 'leva'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'

const suzi = import('@pmndrs/assets/models/bunny.glb')

type BunGLTF = GLTF & {
  nodes: {
    mesh: THREE.Mesh
  }
}

export default function App() {
  const { text, monitorColor, centerMonitorColor, monitorGlow, centerMonitorGlow, shapeColor, shapeType, shapeScale, rotate, rotateSpeed, hoverEffect, hoverColor } =
    useControls({
      text: 'ROVOID',
      monitorColor: '#ebbb09',
      centerMonitorColor: '#000',
      monitorGlow: { value: 0.5, min: 0, max: 2 },
      centerMonitorGlow: { value: 2, min: 0, max: 10 },
      shapeType: { value: 'torus', options: ['cube', 'sphere', 'torus'] },
      shapeColor: '#ebbb09',
      shapeScale: { value: 0.5, min: 0.1, max: 2, step: 0.1 },
      rotate: true,
      rotateSpeed: { value: 1, min: 0, max: 5, step: 0.1 },
      hoverEffect: true,
      hoverColor: '#ffffff'
    })

  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventSource={document.getElementById('root')!} eventPrefix="client">
      {/* Lights */}
      <color attach="background" args={['black']} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      {/* Main scene */}
      <group position={[0, -1, 0]}>
        {/* Auto-instanced sketchfab model */}
        <Instances>
          <Computers
            scale={0.5}
            text={text}
            monitorColor={monitorColor}
            centerMonitorColor={centerMonitorColor}
            monitorGlow={monitorGlow}
            centerMonitorGlow={centerMonitorGlow}
            shapeColor={shapeColor}
            shapeType={shapeType}
            shapeScale={shapeScale}
            rotate={rotate}
            rotateSpeed={rotateSpeed}
            hoverEffect={hoverEffect}
            hoverColor={hoverColor}
          />
        </Instances>
        {/* Plane reflections */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={180}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
            mirror={1}
          />
        </mesh>
        {/* Bunny and a light give it more realism */}
        <Bun scale={0.4} position={[0, 0.3, 0.5]} rotation={[0, -Math.PI * 0.85, 0]} />
        <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
      </group>
      {/* Postprocessing */}
      <EffectComposer enableNormalPass={false}>
        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={1.5} />
      </EffectComposer>
      {/* Camera movements */}
      <CameraRig />
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
    </Canvas>
  )
}

function Bun(props: any) {
  const model = suspend(suzi) as { default: string }
  const { nodes } = useGLTF(model.default) as unknown as BunGLTF
  return (
    <mesh receiveShadow castShadow geometry={nodes.mesh.geometry} {...props}>
      <meshStandardMaterial color="#222" roughness={0.5} />
    </mesh>
  )
}

function CameraRig() {
  useFrame((state: RootState, delta: number) => {
    easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}