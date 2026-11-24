class Dude {
  constructor(x,y,z) {
    this.obj = document.createElement("a-entity");

    let head = document.createElement("a-sphere");
    head.setAttribute("position", {x: 0, y: 0, z: 0});
    head.setAttribute("radius", 0.5);
    head.setAttribute("color", "#000000");
    this.obj.append(head);

    let neck = document.createElement("a-cylinder");
    neck.setAttribute("position", {x: 0, y: 0.35, z: 0});
    neck.setAttribute("radius", 0.2);
    neck.setAttribute("height", 0.5);
    neck.setAttribute("color", "gray");
    this.obj.append(neck);

    let top = document.createElement("a-cylinder");
    top.setAttribute("position", {x: 0, y: 0.6, z: 0});
    top.setAttribute("radius", 0.1);
    top.setAttribute("height", 0.5);
    this.obj.append(top);

    let leftFoot = document.createElement("a-cylinder");
    leftFoot.setAttribute("position", {x: -0.3, y: -0.6, z: 0.07});
    leftFoot.setAttribute("rotation", {x: 90, y: 0, z: 0});
    leftFoot.setAttribute("radius", 0.1);
    leftFoot.setAttribute("height", 0.26);
    leftFoot.setAttribute("color", "Goldenrod");
    this.obj.append(leftFoot);

    let leftLeg = document.createElement("a-cylinder");
    leftLeg.setAttribute("position", {x: -0.3, y: -0.5, z: 0});
    leftLeg.setAttribute("radius", 0.05);
    leftLeg.setAttribute("height", 0.3);
    leftLeg.setAttribute("color", "Goldenrod");
    this.obj.append(leftLeg);

    let leftToe = document.createElement("a-sphere");
    leftToe.setAttribute("position", {x: -0.3, y: -0.6, z: 0.22});
    leftToe.setAttribute("radius", 0.105);
    leftToe.setAttribute("color", "Goldenrod");
    this.obj.append(leftToe);

    let rightFoot = document.createElement("a-cylinder");
    rightFoot.setAttribute("position", {x: 0.3, y: -0.6, z: 0.07});
    rightFoot.setAttribute("rotation", {x: 90, y: 0, z: 0});
    rightFoot.setAttribute("radius", 0.1);
    rightFoot.setAttribute("height", 0.26);
    rightFoot.setAttribute("color", "Goldenrod");
    this.obj.append(rightFoot);

    let rightLeg = document.createElement("a-cylinder");
    rightLeg.setAttribute("position", {x: 0.3, y: -0.5, z: 0});
    rightLeg.setAttribute("radius", 0.05);
    rightLeg.setAttribute("height", 0.3);
    rightLeg.setAttribute("color", "Goldenrod");
    this.obj.append(rightLeg);

    let rightToe = document.createElement("a-sphere");
    rightToe.setAttribute("position", {x: 0.3, y: -0.6, z: 0.22});
    rightToe.setAttribute("radius", 0.105);
    rightToe.setAttribute("color", "Goldenrod");
    this.obj.append(rightToe);

    let leftEye = document.createElement("a-cylinder");
    leftEye.setAttribute("position", {x: -0.18, y: 0, z: 0.45});
    leftEye.setAttribute("radius", 0.10);
    leftEye.setAttribute("height", 0.25);
    leftEye.setAttribute("color", "white");
    this.obj.append(leftEye);

    let rightEye = document.createElement("a-cylinder");
    rightEye.setAttribute("position", {x: 0.18, y: 0, z: 0.45});
    rightEye.setAttribute("radius", 0.10);
    rightEye.setAttribute("height", 0.25);
    rightEye.setAttribute("color", "white");
    this.obj.append(rightEye);

    this.obj.setAttribute("position", {x: x, y: y, z: z});
    scene.append(this.obj);
  }
}