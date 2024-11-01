import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei'
import ImagesGroup from './components/ImagesGroup/ImagesGroup'

function App() {
  return (
    // <div className='page-container'>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll>
              <ImagesGroup />
            </Scroll>
            {/* <Scroll html>
              <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>to</h1>
              <h1 style={{ position: 'absolute', top: '120vh', left: '60vw' }}>be</h1>
              <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw' }}>home</h1>
            </Scroll> */}
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>      
    // </div>
  )
}

export default App
