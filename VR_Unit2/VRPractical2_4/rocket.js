class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(1, 5)/30;

  let base=document.createElement("a-cone");
  base.setAttribute("radius-top", "0");
  base.setAttribute("radius-bottom", "0.5");
  base.setAttribute("height", "1");
  base.setAttribute("color", "red");
  base.setAttribute("position", "0, 0, -2")
  this.obj.append(base);

  let body=document.createElement("a-cylinder");
  body.setAttribute("radius", "0.5");
  body.setAttribute("height", "2");
  body.setAttribute("color", "gray");
  body.setAttribute("position", "0, -1.5, -2")
  this.obj.append(body);

  let bottom=document.createElement("a-cone");
  bottom.setAttribute("radius-top", "0");
  bottom.setAttribute("radius-bottom", "0.25");
  bottom.setAttribute("height", "2");
  bottom.setAttribute("color", "orange");
  bottom.setAttribute("position", "0, -3.5, -2")
  bottom.setAttribute("rotation", "-180, 0, 0")
  this.obj.append(bottom);

  this.obj.setAttribute("position", {x:x, y:y, z:z});
  scene.append(this.obj);
  }
  
  fly(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y > 50){
      this.y = 0;
    }
  }

  
}