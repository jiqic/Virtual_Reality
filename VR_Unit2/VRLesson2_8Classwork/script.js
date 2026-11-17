let wireframe;

window.addEventListener("DOMContentLoaded",function() {
  wireframe = document.querySelector("#wireframe");
  wireframe.a = 0;
  wireframe.da = -1;

  loop();
})

function loop(){
  wireframe.a += wireframe.da;
  if(wireframe.a > 90){
    wireframe.da = 0;
  }
  wireframe.setAttribute("rotation",{x:wireframe.a, y:0, z: 0});

  window.requestAnimationFrame( loop );
}