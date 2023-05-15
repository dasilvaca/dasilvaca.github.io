/*
Snippet created inspired on Shader Texture 2D - basic.vert by aferriss: https://editor.p5js.org/aferriss/sketches/m74DWvY9z
*/

let texture_shader;
let texture;

preload = () => {
  // Loads the shader, is composed of two files, a vertex and a fragment shader
  texture_shader = loadShader('texture.vert', 'texture.frag');
  // Loads the texture. in this case, an image
  texture = loadImage('kitten_texture.jpg');
};

setup = () => {
  createCanvas(windowWidth, windowHeight, WEBGL);
  texture.resize(width, height);


};

draw = () => {
  background(0);
  resizeCanvas(windowWidth, windowHeight)
  shader(texture_shader);
  texture_shader.setUniform('uTexture', texture);
  rect(0, 0, width, height);

}
