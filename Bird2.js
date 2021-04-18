class Bird2{
    constructor(x,y){
    
        var options={
            restitution: 0.5,
            density: 1.5,
                friction: 1.0
        }
    
        this.trajectory =[];
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
        this.image=loadImage("images/bird2.png")
        this.smokeImage = loadImage("images/smoke.png");
    }
    
    display(){
    var pos = this.body.position;
    //pos.x=mouseX;
    //pos.y=mouseY;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    imageMode(CENTER);
    fill("red");
    image(this.image,0,0,this.width, this.height)
    pop();
    
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      }
    }
    
    }