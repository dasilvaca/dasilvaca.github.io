let coloring_shader;

preload = () => {
    coloring_shader = loadShader('coloring.vert', 'coloring.frag');
    }

setup = () => {
    createCanvas(windowWidth, windowHeight, WEBGL);
    }

draw = () => {
    background(0);
    resizeCanvas(windowWidth, windowHeight)
    shader(coloring_shader);
    rect(width, height,0);
    }