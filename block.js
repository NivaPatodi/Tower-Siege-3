class Block
{
    constructor(x, y, width, height)
    {
        var options =
        {
            restitution: 0,
            friction: 1.,
            density: 1.0
            //isStatic: true
        }

        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        
        this.body = Bodies.rectangle(x, y, width, height, options);        
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.speed<3)
        {
            push();

            translate(pos.x, pos.y);
            rotate(angle);

            rectMode(CENTER);
            fill(this.color);
            rect(0, 0, this.width, this.height);

            pop();
        }
            
        else
        {
            World.remove(world,this.body);

            push();

            this.visibility=this.visibility-5;
            tint(255,this.visibility);

            pop();
        } 
    }

    score()
    {
        if (this.visibility<0 && this.visibility>-105)
        {
            score = score + 1;
        }
    }
}