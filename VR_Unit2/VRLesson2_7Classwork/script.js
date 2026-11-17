let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dude, dudes=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");
  duke = new Dude(0,1,0);

  //Challenge 4: Create an array of dudes at random locations.
  for (let i = 0; i < 50; i++) {
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let dude = new Dude(x, 5, z);
    dudes.push(dude);
  }
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  duke.jump();

  for (dude of dudes){
    dude.jump();
  }
  window.requestAnimationFrame( loop );
}