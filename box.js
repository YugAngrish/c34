class Box{
    constructor(x,y){
       var options = 
       {
          
           restitution : 1,
           friction : 0.5,
           density : 0.9
       }
       this.body = Bodies.rectangle(x,y,50,50,options)
       World.add(world,this.body)
       
    }
    display(){
      var angle = this.body.angle
      var posX = this.body.position.x
      var posY = this.body.position.y
      push();
      translate(posX,posY)
      fill("yellow")
     rotate(angle)
    rectMode(CENTER)
    rect(0,0,50,50)

    pop();
    }
}