class house{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
  let base=document.createElement("a-box");
  base.setAttribute("color", "#bba38a");
  base.setAttribute("position", "0, 1, 0");
  this.obj.append(base);

  let roof=document.createElement("a-cylinder");
  roof.setAttribute("color", "#A44A4A");
  roof.setAttribute("position", "0, 2, 0");
  roof.setAttribute("segments-radial", "3");
  roof.setAttribute("rotation", "270 0 0");  
  this.obj.append(roof);

  this.obj.setAttribute("position", {x:x, y:y, z:z});
  scene.append(this.obj);
    scene.append( this.obj )
  }
}