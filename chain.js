class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length: 10
        }   
    }
        this.chain= Constraint.create(options);
        World.add(world, this.chain);
    


    display(){
            var pointA = this.sling.bodyA.position;
            var pointB  = this.sling.bodyB.position;
            push();
            
            stroke(48,22,8);
                
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
            
            pop();
        }
    }