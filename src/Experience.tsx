/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFrame } from '@react-three/fiber'
import React from 'react'

export default function Experience() {
  const cubeRef = React.useRef<any>()
  useFrame((_state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.03
    }
  })

  return (
    <>
      <mesh ref={cubeRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="mediumpurple" wireframe />
      </mesh>
    </>
  )
}