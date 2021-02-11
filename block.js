class Block{
    constructor(x,y,width,height,color){
        var options={
            restitution:0.5,
            density:0.0004,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.color=color;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3)
        stroke("gold")
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
    }
}