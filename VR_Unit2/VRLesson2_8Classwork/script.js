let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#wireframe");
  target.a = 0;
  target.da = 2;

  loop();
})

function loop(){
  target.a += target.da;
  target.setAttribute("rotation",{x:target.a, y:0, z: 0});

  if(target.a > 90){
    target.da = 0;
  }
  window.requestAnimationFrame( loop );
}