
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, left, right, lw, rw, ceiling, ball;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 650, 800, 5)
	left = new Ground(600, 625, 5, 50)
	right = new Ground(700, 625, 5, 50)
	lw = new Ground(50, 350, 5, 700)
	rw = new Ground(750, 350, 5, 700)
	ceiling = new Ground(400, 50, 800, 5)

	ball_opt = {
		restitution : 0.5
	}
	ball = Bodies.circle(200, 100, 20, ball_opt)
	World.add(world, ball)

	//Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS)
  
}


function draw() {
  background(0);

  ellipse(ball.position.x, ball.position.y, 20)

  ground.show()
  left.show()
  right.show()
  lw.show()
  rw.show()
  ceiling.show()
  Engine.update(engine)
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.025, y: -0.05})
	}
}