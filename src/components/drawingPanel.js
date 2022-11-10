import React, { Component } from 'react';
import * as THREE from 'three'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
/* import { DisplayPlane } from './threeSketch'; */
import { Plane, shaderMaterial } from '@react-three/drei';

export class DrawingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawingDimensions: {x: 10, y: 10}
    }
  }
  render() {
    return <div id="drawing-panel" className="PinkBorder">
      <Canvas>
        {/* <ambientLight /> */}
        <DisplayPlane drawingDimensions={this.state.drawingDimensions} />
      </Canvas>
    </div>;
  }
  componentDidMount(){
    this.updateDrawingDimensions();
    window.addEventListener('resize', this.updateDrawingDimensions());
  }
  updateDrawingDimensions(){
    let drawPanel = document.getElementById("drawing-panel");
    this.setState({ drawingDimensions: {x: drawPanel.offsetWidth, y: drawPanel.offsetHeight} })
  }
}

export default DrawingPanel;

const ColorShiftMaterial = shaderMaterial(
  { time: 0, resolution: new THREE.Vector2() },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
  `,
  `
  varying vec2 vUv;
  uniform float time;
  uniform vec2 resolution;
  vec3 colorA = vec3(0.149,0.141,0.912);
  vec3 colorB = vec3(1.000,0.833,0.224);
  void main() {
    vec2 uv = vUv;
    vec3 color = vec3(0.0);
    color = mix(colorA, colorB, uv.x);
    gl_FragColor = vec4(color,1.0);
  }
  `
)

extend({ ColorShiftMaterial })

const DisplayPlane = (props) => {
  const size = useThree((state) => state.size);
  console.log(size);

  return (
    <Plane args={[2, 2]}>
      <colorShiftMaterial attach="material" time={0} resolution={[size.width, size.height]} />
    </Plane >
  )
}
