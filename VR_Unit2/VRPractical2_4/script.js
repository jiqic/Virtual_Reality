let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets=[], ufos=[];

window.addEventListener("DOMContentLoaded", function(){
  scene = document.querySelector("a-scene"); 
  for (let i = 0; i < 500; i++) {
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let rocket = new Rocket(x, 0, z);
    rockets.push(rocket);
  }

  for (let i = 0; i < 500; i++) {
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let ufo = new Ufo(x, 100, z);
    ufos.push(ufo);
  }
  loop();
});

function loop() {
  for (let rocket of rockets){
    rocket.fly();
  }
  for (let ufo of ufos){
    ufo.fall();
  }
  window.requestAnimationFrame(loop);

}