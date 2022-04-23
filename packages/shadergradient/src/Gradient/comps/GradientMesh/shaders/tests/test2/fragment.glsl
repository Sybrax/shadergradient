uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));

  // gl_FragColor.rgb =
  //     color1 * vNormal.x + color2 * vNormal.y + color3 * vNormal.z;
  // gl_FragColor.rgb =
  //     color1 * distanceToCenter + color2 * 0.5 + color3 * 0.5;

  gl_FragColor.rgb =
      color1 * vPos.x + color2 * vPos.y + color3 * vPos.z;
}
