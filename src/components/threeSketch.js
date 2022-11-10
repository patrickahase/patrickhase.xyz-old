import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
/* import vert from '../assets/glsl-shaders/vert.glsl';
import frag from '../assets/glsl-shaders/frag.glsl'; */

const vert = `
attribute float displacement;

varying vec3 vNormal;
varying vec2 vUv;

void main() {

  vNormal = normal;
  vUv = ( 0.5 + 1.0 ) * uv + vec2( 1.0 );

  vec3 newPosition = position + 1.0 * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

}`

const frag = `
varying vec3 vNormal;
varying vec2 vUv;
uniform vec2 resolution;

void main() {
  vec2 st = vUv;
  gl_FragColor = vec4(st.x/2., resolution.x, resolution.y, 1.0 );

}`

export const TestBox = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export const DisplayPlane = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  /* const ref = useRef() */
  // Return the view, these are regular Threejs elements expressed in JSX
  let uniforms = {
    resolution: { value: [0.0, 0.0] }
  }
  let div = 10;
  return (
    <mesh
      {...props}
      /* ref={ref} */>
      <planeGeometry args={[props.drawingDimensions.x/div, props.drawingDimensions.y/div]} />
      {/* <meshStandardMaterial color={'green'} /> */}
      <shaderMaterial uniforms={uniforms} vertexShader={vert} fragmentShader={frag} />
    </mesh>
  )
}

export const Camera = (props) => {
/*   const ref = useRef();
  const setDefaultCamera = useThree();
  useEffect(() => void setDefaultCamera(ref.current), []); */
  /* useFrame(() => ref.current.updateMatrixWorld()); */
  return (
    <perspectiveCamera /* ref={ref} */ {...props} makeDefault />
  )
}