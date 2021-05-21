class ground{
    constructor(){
        var options ={
            isStatic :true
        }
        this.ground = Bodies.rectangle(450,390,900,20,options);
        world.add(world , this.world);
    }
    display(){
        noStroke ();
        fill (188,67,67);
        rectMode(CENTER);
        rect (thi.ground.position.x , this.ground.position.y , 900,20);
    }
}