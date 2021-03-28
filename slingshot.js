class Slingshot{
    constructor(bodyA,pointB){
    var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.1,
        length : 350
    }
    this.chain = Constraint.create(options)
    World.add(world,this.chain)
    this.pointB = pointB
    }
    display(){
        push()
    var pointA = this.chain.bodyA.position
    var pointB = this.pointB
    
    strokeWeight(4)
 
    line(pointA.x,pointA.y,pointB.x, pointB.y)
    
      pop()
    }
}