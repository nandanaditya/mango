class catapult{

    constructor (a,b){
    
    
    var dog = {bodyA:a,pointB:b,length:70,stiffness:0.7}
    this.rope = Matter.Constraint.create(dog);
    World.add(world,this.rope)
    }
    display(){
     if(this.rope.bodyA!=null)
    line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
    
    }
    detach(){
    this.rope.bodyA = null
    }
    }