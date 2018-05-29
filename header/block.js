class block {
    constructor(start = {x: 150, y: 150}, color) {
        this.color = color
        this.pos = start

        this.size = {
            w: 130,
            h: 100
        }
    }
    
    draw() {
        push()
        noStroke()
        fill(this.color)
        rect(this.pos.x - this.size.w/2, this.pos.y - this.size.h/2, this.size.w, this.size.h)
        pop()
    }
}
