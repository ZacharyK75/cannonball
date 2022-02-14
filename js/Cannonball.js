class CannonBall {

    constructor(x, y) {

        var cannonball_options = { isStatic: true }
        this.r = 30
        this.body = Bodies.circle(x, y, this.r, cannonball_options)

        this.image = loadImage(/assets/cannonball.png)
        World.add(world, this.body)
    }


    display() {

        push()
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)
        pop()


    }

    shoot(){

        var newangle = cannon.angle - 28
        newangle = newangle * (3.14/180)
        var velocity = p5.Vector.fromAngle(newangle)
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body, {
            x:velocity.x * (180/3.14),
            y:velocity.y * (180/3.14)
        })
    }
}