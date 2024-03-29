class Block{
    constructor(){
        var options ={
            restitution : 0.4,
            fricion : 0.0
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        world.add(world,this.body);
    }

    display(){
        console.log(this.body.speed);
        if(this.body.sped <3){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate (pos.x , pos.y)
            rotate (angle);
            rectMode (CENTER);
            rect (0,0,this.width,this.height);
            pop();
        }else{
            world.remove(world, this.body);
            push ();
            this.visibility = this.visibility-5;
            pop ();
        }
    }
}