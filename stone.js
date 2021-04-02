class stone {
    constructor(x,y,d) {
      var options = {
          isStatic: false,
          restitution:0.6,
          friction:1.0,
          density:1.2
      }
        this.body = Bodies.circle(x, y, d, options);
        this.d=d;
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.d);
        pop();
      }
  };