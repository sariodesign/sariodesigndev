#version 300 es

precision mediump float;

uniform float uFrequency;
uniform float uTime;
uniform float uSpeed;
uniform float uValue;
uniform float uAlpha; // Aggiunto per trasparenza

in vec2 vUv;

out vec4 fragColor;

#include "lygia/generative/cnoise.glsl"

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0f, 2.0f / 3.0f, 1.0f / 3.0f, 3.0f);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0f - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0f, 1.0f), c.y);
}

void main() {
  float hue = abs(cnoise(vec3(vUv * uFrequency, uTime * uSpeed)));

  vec3 rainbowColor = hsv2rgb(vec3(hue, 1.0f, uValue));

  fragColor = vec4(rainbowColor, uAlpha);

  //fragColor = vec4(rainbowColor, uAlpha); // Usa l'uniforme per l'alfa
}
