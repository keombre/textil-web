class curve {
    constructor(start = {x: 150, y: 150}, color, length = 2) {
        this.start = start
        this.length = length
        this.color = color

        this.tranDist = 40
        this.width = 30

        this.seed = random(0, 360)
    }

    draw() {
        push()

        noiseSeed(this.seed)

        let width = []

        translate(this.start.x, this.start.y)
        beginShape()
        noStroke()
        fill(this.color)

        let v = createVector(0, 0)
        let vT = p5.Vector.fromAngle(radians(this.seed), this.tranDist)

        for (let i=0; i<this.length; i++) {
            curveVertex(v.x, v.y)
            vT.rotate(radians(map(noise(i * 0.3), 0, 1, -90, 90)))
            
            width.push(p5.Vector.add(v, p5.Vector.fromAngle(vT.heading() + PI/2, map(noise(i * 0.1 + 20), 0, 1, 2, this.width))))
            v.add(vT)
        }
        
        width.reverse()
        for (let p of width) {
            curveVertex(p.x, p.y)
        }

        endShape()
        pop()
    }
}
