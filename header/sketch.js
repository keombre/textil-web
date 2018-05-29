
let curves = []
let blocks = []

function setup() {
    createCanvas(windowWidth, windowHeight)

    for (let i=0; i<8; i++) {
        let col = color(random(0, 255), random(0, 255), random(0, 255))
        let pos = {x: 150 + i*150, y: 150}
        curves.push(new curve(pos, col))
        blocks.push(new block(pos, col))
    }

}

let length = 1

let activeB, activeC

function draw() {
    background(255)

    for (let curve of curves) {
        curve.draw()
        curve.length = length
    }

    length = length%100 ? length+1 : length
    
    let above = false

    blocks.forEach((block, id) => {
        if (
            mouseX > block.pos.x - block.size.w/2 &&
            mouseX < block.pos.x + block.size.w/2 &&
            mouseY > block.pos.y - block.size.h/2 &&
            mouseY < block.pos.y + block.size.h/2
        ) {
            activeB = block
            activeC = curves[id]

            above = true
        } else {
            block.draw()
        }
    })

    if (!above)
        activeB = activeC = null

    if (activeB && activeC) {
        fill(color(255, 255, 255, 128))
        noStroke()
        rect(0, 0, windowWidth, windowHeight)
        activeB.draw()
        activeC.draw()
        cursor(HAND)
    } else {
        cursor(ARROW)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
