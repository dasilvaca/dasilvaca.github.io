precision mediump float;

attribute vec3 aPosition;

void main() {
    vec2 make_wide = aPosition.xy;
    make_wide.xy = make_wide.xy * 2.0 - 1.0;

  gl_Position = vec4(make_wide, aPosition.z, 1.0);
}