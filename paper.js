class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate (angle);
      rectMode(CENTER);
      fill("purple");
     rect(pos.x, pos.y, 50, 50);
    
      pop();
    }
  }