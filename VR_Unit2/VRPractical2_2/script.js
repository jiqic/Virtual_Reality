
window.addEventListener("DOMContentLoaded",function() {

      scene = document.querySelector("a-scene");
      
  car = document.querySelector("#car");
  car.x = 0;
  car.dx = 0.01;

  ball = document.querySelector("#pokemonball");
  ball.y = 0;
  ball.dy = 1;

  sun = document.querySelector("#sun");
  sun.t = 0;
  sun.dt = 0.01;

  rocket = document.querySelector("#rocket");
  rocket.r = -2;
  rocket.dr = 0.01;

  dude = document.querySelector("#dude");
  dude.z = 0;
  dude.dz = 0.01;
  
  loop();
})

function loop(){
  ball.y += ball.dy;
  ball.setAttribute("rotation",{x:0, y:ball.y, z:0});

  rocket.r += rocket.dr;
  rocket.setAttribute("position",{x:0, y:rocket.r, z:0});

  sun.t += sun.dt;
  sun.setAttribute("opacity", sun.t);

  dude.z += dude.dz;
  dude.setAttribute("scale",{x:dude.z, y:dude.z, z:dude.z});

  car.x += car.dx;
  car.setAttribute("position",{x:car.x, y:0, z:0});
  window.requestAnimationFrame(loop);
}


let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);