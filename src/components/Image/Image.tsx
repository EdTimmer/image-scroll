import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Image as ImageImpl, ImageProps } from '@react-three/drei'

type MyImageProps = ImageProps & {
  c?: THREE.Color;
  // scale?: number | [number, number, number];
}

const Image: React.FC<MyImageProps> = ({ c = new THREE.Color(), ...props }) => {
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, hover] = useState(false)

  useFrame(() => {
    if (ref.current?.material) {
      const material = ref.current.material as THREE.MeshBasicMaterial
      if (material.color) {
        material.color.lerp(c.set(hovered ? 'white' : '#ccc'), hovered ? 0.4 : 0.05)
      }
    }
  })

  return (
    <ImageImpl
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    />
  )
}

export default Image