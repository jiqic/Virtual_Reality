let scene;
let mechTemplate;
let army=[]

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mechTemplate = document.getElementById("mech-1");
 
  for(let x=-50; x<50; x+=10){
    for(let z = -100; z<100; z+=10){
      let m=new Mech(x,13,z);
      army.push(m);
    }
  }
  loop();
})
function loop(){

  window.requestAnimationFrame( loop );
}
