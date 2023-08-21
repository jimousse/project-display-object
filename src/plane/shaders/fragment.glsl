uniform float uTime;

void main() {
  gl_FragColor = vec4(sin(uTime * 0.01), 0.2, 0.3, 1.0);
}