class Ground {
    constructor(x, y, w, h) {
        let options = {
            isStatic : true
        }

        this.wall = Bodies.rectangle(x, y, w, h, options)
        this.w = w
        this.h = h
        World.add(world, this.wall)
    }
    show() {
        var pos = this.wall.position
        push()
        rectMode(CENTER)
        stroke(255)
        fill(255)
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}