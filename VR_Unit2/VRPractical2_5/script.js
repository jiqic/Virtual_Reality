/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/
let maze = [
  "w-wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  "w---w-----------wd----w---w---ws--w----------dw---w----dw-----ws-----sww",
  "www-w-wwwwwwwww-www-w-w-w-w-w-www-w-wwwww-wwwww-w-w-w-www-w-w-www-wwwwww",
  "wsw-w---w---wsw---w-w-w-w---w-w---w-------w-----w-w-w-w---w-w---w-----ww",
  "w-w-w-w-w-w---www-w-w-w-wwwww-w-www-w-www-w-wwwww-w-w-w-www-www-wwwww-ww",
  "w-w-w-w-w-w-----w---w-w-w-----w-----w-ws--w-w---w---w---wsw---w-w---w-ww",
  "w-w-w-w-w-wwwww-wwwww-w-w-wwwww-wwwww-www-w-w-w-wwwww-www-www---w-w-w-ww",
  "w-w-wdw-----w---wsw---w-w-ws-------sw---wdw-w-w-----w---w-w---w-w-w-w-ww",
  "w-w-www-w-w-w-www---www-w-www-wwwwwww-w-www-w-wwwww-www-w-w-www-w-w-w-ww",
  "w-w-----w-w-w-----w-ws--w---w-w-----wsw-----w---w---wsw-w-w-wd----w-w-ww",
  "w-wwwwwww-w-wwwww-w-www-www-w-w-www-www-wwwww-w-w-www-w-w-w-ww-wwww-w-ww",
  "w-w-----w-w---ws--w-w---wsw-w-w-wsw---wdw---w---w-----w-w-w-w---wsw---ww",
  "w-w-www-w-www-www-w-w-www-w-w-w-w-www-www-w-w-wwwww-w-w-w-w-w-w-w-w-w-ww",
  "w----sw-w-wsw---w-w-w-w---w-w-w-w---w-----w---wdw---w-----w---w-w-w---ww",
  "wwwwwww-w-w-www-w-w-w-w-www-w-w-www-wwwwwwwwwww-w-wwwwwwwwwww-w-w-www-ww",
  "w-------w-w---w-wdw---w-w---w-w---w-------wsw---w-----------wsw-w-w---ww",
  "w-w-wwwww-www-w-wwwwwww-w-www-www-w-wwwww-w-w-w-wwwwwwwwwww-www-w-w-wwww",
  "w-wsw---w---w-w---------w-wdw-w-------wdw-w---w-----wd----w-----w-w-wsww",
  "w-www-w-www-w-wwwwwww-www-w-w-w-wwwww-w-w-wwwwwww-w-wwwww-wwwwwww-w-w-ww",
  "w-----w-w---w-----w---w---w---w-w-----w-w---------w---w---w-------w-w-ww",
  "wwwwwww-w-www-www-w-www-www-www-w-wwwww-wwwwwwwwwwwww-w-www-w-www-w-w-ww",
  "w-------w---w--dw-w---w-w---wdw-w-----w---------------w---w-w-ws--w-w-ww",
  "w-wwwwwwwww-wwwww-www-w-w-www-w-www-w-wwwwwwwwwww-wwwww-w-w-w-wwwww-w-ww",
  "w---------w-w---w---w---w-----w---w-w-------w---w-w---wsw---w-w-----w-ww",
  "w-w-wwwww-w-w-w-w-w-wwwwwwwwwww-w-w-w-w-www-w-w-w-w-w-wwwwwww-w-wwwww-ww",
  "w-w-w-----w-w-w---w-----------wdw-w-----wdw---w-w---w---w---w-w-ws----ww",
  "w-w-w-www-w-w-wwwwwww-wwww-ww-www-w-wwwww-wwwww-wwwwwww-w-w-w-w-www-w-ww",
  "w---w---wdw-w---------------------w-w--------sw-------w---w-w-w---w-w-ww",
  "www-www-www-w-www-wwwwwww-wwwwwwwww-w-w-wwwwwww-w-www-wwwww-w-www-w-w-ww",
  "ws--w---w---w---w---w---w-w---ws------w-w-------w-w---w-------w---w-w-ww",
  "wwwww-w-w-w-www-www-w-w---w-w-wwwwwwwww-w-wwwww-w-w-www--wwwwww-www-w-ww",
  "w-----wsw---wsw-wsw---w-wsw-w-------w---w-----w-w-w---w---w-----ws--w-ww",
  "w-wwwwwwwww-w-w-w-wwwww-www-wwwwwww-w-wwwwwww-w-w-www-www-w-wwwwwww-w-ww",
  "w---w----sw-w-w-w---w---w---w----dw-w---wsw---w-w-w---ws--w-ws------w-ww",
  "w-w-w-w-www-w---www-w-w-w-www-wwwww-www-w-w-w-w-w-w-w-wwwww-wwwww-www-ww",
  "w-w-w-w-----w-w---w-w-wsw---w-------wd----w---w-w-w-wsw---w-------wdw-ww",
  "w-w-w-wwwwwww-www---w-wwwww-w-w-wwwwwwwww-www-w-w-w-www-w-wwwwwwwww-w-ww",
  "wsw-w-----wd---sw-w-w-----------w-------w---w-wdw-w-----w-----------w-ww",
  "www-wwwww-www-www-w-wwwwwwwwwww-w-wwwww-www-w-www-wwwwwwwwwwwww-wwwww-ww",
  "w---w---w---w-------wd--w-----w---w---w---w-w---w-----ws-----dw-----w-ww",
  "w-w-w-w-www-w-wwwww-www-w-www-wwwww-w-www-w-www-wwwww-www-w-wwwwwww-w-ww",
  "w-w---w--dw-------w-----w---------w-w-----w-wsw----sw---wsw------sw---ww",
  "w-www-wwwwwwwwwww-wwwww-www-w-w-w-w-wwwwwww-w-www-wwwww-wwwww-w-wwwwwwww",
  "w---w-w---------w-ws----w---w---w---w-----w-w--dw-----w---w---w-------ww",
  "w-w-w-w-www-www-w-wwwwwww-wwwwwwwwwww-www-w-w-wwwwwww-www-w-www-wwwww-ww",
  "wdw-wsw-w---w---w-w-------w---ws------ws--w-w-------w---w-w---w-w--dw-ww",
  "www-www---www-www-w-wwwwwww-w-www-w-w-wwwww-w-wwwww-www-w-w-w---w-www-ww",
  "w---w---w---w-wdw---w-------w---w-w-wsw-----wdw---w-w---w-w-w-w---w---ww",
  "w-w-w-wwwww-w-w-wwwww-www-wwwww-w-w-www-wwwwwww-w-w-w-www-w-w-www-w-wwww",
  "w---w----dw-w-----wsw---w---wsw-wsw---w-w-------w---w-----wsw-----w---ww",
  "w-w-w-wwwww-wwwww-w-www-www-w-w-wwwww-w-w-w-wwwwwwwwwwwwwwwwwwwwwwwww-ww",
  "wsw---w---w---ws--w-----w---w-w-------w-wdw-------w---w---------w---w-ww",
  "wwwwwww-w-w-w-www-wwwwwww-www-wwwwww--w-wwwwwww-w-w-w-w-w-wwwww-w-w-w-ww",
  "w-------w-w-w---w---------ws-----sw---w-w-------w---w---w-wd------w-w-ww",
  "w-wwwwwww-w-www-wwwwwwwwwwwww-wwwww-www-w-www-w-wwwwwwwww-wwwwwwwww-w-ww",
  "w-wsw-----w-wdw-w-------------w-----w---w---w-wsw-------w-----wdw---w-ww",
  "w-w-w-wwwww-w-w-w-w-wwwwwwwww-w-wwwww-wwwww-w-www-wwwww-wwwww-w---www-ww",
  "w-w---w---w---w-wsw-----w--sw-w-wsw---wd----w-w---w---w---w---w---wd--ww",
  "w-www-w-w-www-w-wwwwwww-w-www-w-w-w-wwwww-www-w-www-w-www-w-www-wwwww-ww",
  "w---w-wsw-----w-----w---w-----w---w-------wdw---w---w---w---w---w---w-ww",
  "w-w-w-wwwww--wwwwww-w-wwwwwww-www-ww--wwwww-wwwww-www-w-wwwww-www-w-w-ww",
  "w-w-w-----w--dw-----w---------w---w-----------w---w-----w-----wd--w---ww",
  "w-w-wwwww-wwwww-wwwww-wwwwwww-w-www-w-w-wwwww-w-www-www-w-wwwwwww-www-ww",
  "w-w-----w-------wdw---w-----w---w---w-w-w---w-w-w---wd--w-----w---w---ww",
  "w-wwwww-wwwwwwwww-w-www-www-wwwww-www-w-w-w-w-w-w-wwwww-wwwww-w-www-wwww",
  "wdw---w---ws------w-----wdw-w---w---w-wdw-w-wsw-w-----w--dw---w-wsw---ww",
  "www-w-www-wwwwwww-wwwwwww-w-w-w-www-w-www-w-www-wwwww-wwwww-www-w-www-ww",
  "w---w-----w-----w-----------w-w-----w-----w---w-----w-w-----wd--w---w-ww",
  "w-wwwwwww-w-www-wwwwwwwwwww-w-wwwwwwwwwwwwwww-wwwww-w-w-wwwwwww-w-w-w-ww",
  "w---------w---w-----------w-w-wd-----------dw-----w-w---ws----w---w-w-ww",
  "wwwww-w-w-www-wwwwwwwwwww-w-w-wwwwwww-www-wwwww-w-w-wwwwwww-w-w-w-w-w-ww",
  "w-----w-w---w-wd------wdw-wsw---w---wdw---w-----wsw-w---w---w-wsw-w---ww",
  "w-wwwww-www-w-wwwww-w-w-w-wwwww-w-w-www-w-w--wwwwww-w-w-w-www-www-w-wwww",
  "w--------dw---------w---w---------w-----wsw-----------w---wd------w---ww",
  "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww-ww"
];
/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let i = 0; i < maze.length; i++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
   let row = maze[i];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "w"){
        new Wall(c,1,i)
      }
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
   else if(cols[c] == "s"){
        new Snowman(c,1,i);
      }else if(cols[c]=="d"){
        new Dude(c,1,i)
      }
    }
  }

})