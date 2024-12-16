#version 300 es

precision highp float;

uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform float uAlpha;

out vec4 fragColor;

float character(int n, vec2 p) {
  p = floor(p * vec2(-4.0f, 4.0f) + 2.5f);
  if(clamp(p.x, 0.0f, 4.0f) == p.x) {
    if(clamp(p.y, 0.0f, 4.0f) == p.y) {
      int a = int(round(p.x) + 5.0f * round(p.y));
      if(((n >> a) & 1) == 1)
        return 1.0f;
    }
  }
  return 0.0f;
}

void main() {
  vec2 pix = gl_FragCoord.xy;
  vec3 col = texture(uTexture, floor(pix / 16.0f) * 16.0f / uResolution.xy).rgb;

  float gray = 0.3f * col.r + 0.59f * col.g + 0.11f * col.b;

  int n = 4096;

  if(gray > 0.2f)
    n = 65600;    // :
  if(gray > 0.3f)
    n = 163153;   // *
  if(gray > 0.4f)
    n = 15255086; // o 
  if(gray > 0.5f)
    n = 13121101; // &
  if(gray > 0.6f)
    n = 15252014; // 8
  if(gray > 0.7f)
    n = 13195790; // @
  if(gray > 0.8f)
    n = 11512810; // #

  vec2 p = mod(pix / 8.0f, 2.0f) - vec2(1.0f);
  col = col * character(n, p);
  fragColor = vec4(col, col.r * uAlpha);
}
