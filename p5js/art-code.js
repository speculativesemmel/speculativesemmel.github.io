function setup() {
    createCanvas(600, 600);
    background(133);
}

function draw() {
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

function variableEllipse(x, y, px, py) {
    let speed = abs(x - px) + abs(y - py);
    stroke(speed);
    ellipse(x, y, speed, speed);
}