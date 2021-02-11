class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pontB:pointB,
            stiffness:0.03,
            length:10,
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    }
    attach(){
        this.sling.bodyA=polygon.body;
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    }
