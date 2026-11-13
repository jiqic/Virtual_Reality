class cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
  let cloud1=document.createElement("a-sphere");
  cloud1.setAttribute("color", "#C7C4BF");
  cloud1.setAttribute("position", "1 5 -1");
  this.obj.append(cloud1);

  let cloud2=document.createElement("a-sphere");
  cloud2.setAttribute("color", "#C7C4BF");
  cloud2.setAttribute("position", "0.5 5 0");
  this.obj.append(cloud2);

  let cloud3=document.createElement("a-sphere");
  cloud3.setAttribute("color", "#C7C4BF");
  cloud3.setAttribute("position", "1 5 1");
  this.obj.append(cloud3);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}