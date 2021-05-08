class Ball
{
    constructor(x, y, radius)
    {
        var options =
        {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.radius = radius;
        this.ballIMG = loadImage("ball.png");

        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }

    display()
    {
        var position = this.body.position;
        var angle = this.body.angle;

        push();

        translate(position.x, position.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.ballIMG, 0, 0, 40, 40);
        pop();
    }

//    score()
//    {
//        if(this.visiblity < 0 && this.visiblity > -105)
//        {
//            score++;
//        }
//    }
}