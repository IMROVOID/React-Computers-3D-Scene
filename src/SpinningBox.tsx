import { useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'
import { useCursor } from '@react-three/drei'
import * as THREE from 'three'
import { easing } from 'maath'

// A new helper component for clarity
const Shape = ({ type }: { type: string }) => {
  switch (type) {
    case 'sphere':
      return <sphereGeometry />
    case 'torus':
      return <torusGeometry />
    // default to cube
    case 'cube':
    default:
      return <boxGeometry />
  }
}

type SpinningBoxProps = ThreeElements['mesh'] & {
  scale: number
  shapeColor: string
  shapeType: string
  rotate: boolean
  rotateSpeed: number
  hoverEffect: boolean
  hoverColor: string
}

export function SpinningBox({ scale, shapeColor, shapeType, rotate, rotateSpeed, hoverEffect, hoverColor, ...props }: SpinningBoxProps) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  useCursor(hovered && hoverEffect)

  useFrame((_, delta) => {
    if (!ref.current) return

    // Hover scaling effect
    const targetScale = hovered && hoverEffect ? scale * 1.2 : scale
    easing.damp3(ref.current.scale, new THREE.Vector3(targetScale, targetScale, targetScale), 0.1, delta)

    // Rotation effect
    if (rotate) {
      ref.current.rotation.x += delta * rotateSpeed
      ref.current.rotation.y += delta * rotateSpeed
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <Shape type={shapeType} />
      <meshStandardMaterial color={hovered && hoverEffect ? hoverColor : shapeColor} />
    </mesh>
  )
}