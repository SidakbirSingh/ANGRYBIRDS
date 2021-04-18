class Pig{
    constructor(x,y){
    
        var options={
            restitution: 0.8,
            density: 1.0,
            friction: 0.3
            
        }
    this.visibility=255;
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
        this.image=loadImage("images/enemy.png")

    }
    
    display(){
    var pos = this.body.position;
    var angle=this.body.angle;
    if(this.body.speed< 3){
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        strokeWeight(4)
        stroke("green")
        fill("red");
        image(this.image,0,0,this.width, this.height)
        pop();
    }else{
        World.remove(world,this.body)
        push()
        this.visibility=this.visibility-5
        tint(255,this.visibility)
        image(this.image,pos.x,pos.y,50,50)
        pop()
    }

    
    }
    
    score(){
        if(this.visibility <0 && this.visibility> -1005){
            score++
        }
    }
    }