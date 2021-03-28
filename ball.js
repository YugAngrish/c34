class Ball{
    constructor(x,y,r){
       var options = 
       {
          
           restitution : 0.3,
           friction : 0.5,
           density : 0.9
       }
       this.body = Bodies.circle(x,y,r,options)
       World.add(world,this.body)
       this.r = r
       
    }
    display(){
      var angle = this.body.angle
      var posX = this.body.position.x
      var posY = this.body.position.y
      push();
      translate(posX,posY)
      fill("red")
     rotate(angle)
    ellipseMode(CENTER)
    ellipse(0,0,this.r)

    pop();
    }
}