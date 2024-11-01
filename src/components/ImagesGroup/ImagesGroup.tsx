import * as THREE from 'three';
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { Group, Mesh } from 'three'
import Image from '../Image/Image'

interface CustomMaterial extends THREE.ShaderMaterial {
  zoom: number;
  grayscale?: number;
}


function ImagesGroup() {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef<Group>(null)

    useFrame(() => {
    if (!group.current) return;

    const meshes = group.current.children as THREE.Mesh[];

    meshes.forEach((mesh, index) => {
      // Handle Material or Material[]
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];

      materials.forEach((material) => {
        const customMaterial = material as CustomMaterial;

        switch (index) {
          case 0:
            customMaterial.zoom = 1 + data.range(0, 1 / 3) / 3;
            break;
          case 1:
            customMaterial.zoom = 1 + data.range(0, 1 / 3) / 3;
            break;
          // case 2:
          //   customMaterial.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3;
          //   break;
          // case 3:
          //   customMaterial.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
          //   break;
          // case 4:
          //   customMaterial.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1;
          //   break;
          // case 5:
          //   customMaterial.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3;
          //   customMaterial.grayscale = 1 - data.range(1.6 / 3, 1 / 3);
          //   break;
          // case 6:
          //   customMaterial.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
          //   break;
          default:
            break;
        }
      });
    });
  });
  
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height]} url="images/hawaii-01.jpg" />
      <Image position={[2, 0, 1]} scale={3} url="images/hawaii-02.jpg" />
      {/* <Image position={[-2.3, -height, 2]} scale={[1, 3]} url="/trip2.jpg" />
      <Image position={[-0.6, -height, 3]} scale={[1, 2]} url="/img8.jpg" />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="/trip4.jpg" />
      <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3]} url="/img3.jpg" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 2]} url="/img7.jpg" /> */}
    </group>
  )
}

export default ImagesGroup;