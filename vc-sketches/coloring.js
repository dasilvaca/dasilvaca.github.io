let coloring_shader;

preload = () => {
    coloring_shader = loadShader('coloring.vert', 'coloring.frag');
    }

setup = () => {
    createCanvas(windowWidth - 20, windowHeight - 20, WEBGL);
    }

draw = () => {
    background(0);
    resizeCanvas(windowWidth, windowHeight)
    shader(coloring_shader);
    rect(width, height,0);
    }