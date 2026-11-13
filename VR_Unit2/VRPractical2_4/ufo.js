class Ufo{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(1, 5)/30;

  let ufobase=document.createElement("a-sphere");
  ufobase.setAttribute("radius", "2");
  ufobase.setAttribute("height", "1");
  ufobase.setAttribute("opacity", "0.25");
  ufobase.setAttribute("color", "cyan");
  ufobase.setAttribute("position", "0, -0.75, -2")
  this.obj.append(ufobase);

  let ufoside=document.createElement("a-torus");
  ufoside.setAttribute("radius", "2");
  ufoside.setAttribute("rotation", "90, 0, 0");
  ufoside.setAttribute("height", "2");
  ufoside.setAttribute("color", "gray");
  ufoside.setAttribute("position", "0, -1.5, -2")
  this.obj.append(ufoside);

  let ufobeam=document.createElement("a-cone");
  ufobeam.setAttribute("radius", "1");
  ufobeam.setAttribute("height", "5");
  ufobeam.setAttribute("opacity", "0.5");
  ufobeam.setAttribute("color", "#6effa5");
  ufobeam.setAttribute("position", "0, -2.5, -2")
  this.obj.append(ufobeam);

  this.obj.setAttribute("position", {x:x, y:y, z:z});
  scene.append(this.obj);
  }
  
  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y < 1.5){
      this.dy = 0;
    }
  }

  
}