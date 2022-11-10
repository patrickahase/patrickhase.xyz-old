`attribute float displacement;

varying vec3 vNormal;
varying vec2 vUv;

void main() {

  vNormal = normal;
  vUv = ( 0.5 + 1.0 ) * uv + vec2( 1.0 );

  vec3 newPosition = position + 1.0 * normal * vec3( displacement );
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

}`