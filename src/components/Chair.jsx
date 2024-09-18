import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Chair(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/chair.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Object001"
          castShadow
          receiveShadow
          geometry={nodes.Object001.geometry}
          material={materials['Material #32']}
          position={[0.597, 0.001, 0.378]}
          rotation={[-0.12, 0, 0.224]}
          scale={0.025}
        />
        <mesh
          name="chair"
          castShadow
          receiveShadow
          geometry={nodes.chair.geometry}
          material={materials['Material #32']}
          position={[0, 0.719, 0]}
          rotation={[-0.12, 0, 0]}
          scale={0.025}
        />
        <group
          name="CoronaLight001"
          position={[1.485, 3.413, 3.45]}
          rotation={[1.1, 0.142, -0.272]}
          scale={[0.007, 0.01, 0.01]}
        />
        <group
          name="PhysCamera001"
          position={[2.156, 1.444, 3.513]}
          rotation={[1.281, 0.174, -0.525]}
          scale={0.01}
        />
        <group
          name="PhysCamera001Target"
          position={[-0.007, 0.731, -0.159]}
          rotation={[1.428, 0.084, -0.526]}
          scale={0.01}
        />
        <mesh
          name="Object002"
          castShadow
          receiveShadow
          geometry={nodes.Object002.geometry}
          material={materials['Material #32']}
          position={[0.597, 0.001, 0.378]}
          rotation={[-0.12, 0, 0.224]}
          scale={0.025}
        />
        <group
          name="CoronaLight002"
          position={[-2.168, 3.413, 1.864]}
          rotation={[1.196, -0.323, 0.679]}
          scale={[0.005, 0.01, 0.006]}
        />
        <group
          name="PhysCamera002"
          position={[1.613, 1.33, 2.629]}
          rotation={[1.402, 0.103, -0.542]}
          scale={0.01}
        />
        <group
          name="PhysCamera002Target"
          position={[-0.297, 0.6, -0.484]}
          rotation={[1.402, 0.103, -0.542]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/chair.glb')