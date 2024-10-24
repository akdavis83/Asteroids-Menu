//requestAnimateFrame - Call it once to start the universe creation and your function will recursively call itself and provide an infinite animation screen.
window.requestAnimFrame = (function(){ 
return  window.requestAnimationFrame;
})();

//Canvas
var canvas = document.getElementById("universe");
var ctx = canvas.getContext("2d");
var cx, cy, rx,ry,rr;
var asteroids = 3000;
var radius = '0.'+ Math.floor(Math.random() * 3) + 1  ;
var length = canvas.height /4;
var meteors = [], meteor;
var animateUniverse = true;

function executeFrame(){  
if(animateUniverse)
    requestAnimFrame(executeFrame);
    revolveAsteroids();
    createAsteroids();
}
activateMeteors();
function activateMeteors(){
  cx = canvas.width / 2;
  cy = canvas.height / 2;
  
  meteors = [];
  for( var i = 0; i < asteroids; i++){
    meteor = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      a: '0.'+Math.floor(Math.random() * 100) + 1
    };
    meteors.push(meteor);
  }
}
function revolveAsteroids(){
  for(i = 0; i < asteroids; i++){
    meteor = meteors[i];
    meteor.z--;
    
    if(meteor.z <= 0){
        meteor.z = canvas.width;
    }
  }
}
function createAsteroids(){

    // Responsive Screen Size
  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    activateMeteors();
  }
  
ctx.fillStyle = "rgba(21,2,40,1)";
ctx.fillRect(0,0, canvas.width, canvas.height);
ctx.fillStyle = "rgba(209, 255, 255, "+radius+")";
for(i = 0; i < asteroids; i++){
    meteor = meteors[i];    
 rx = (meteor.x - cx) * (length / meteor.z);
 rx += cx;
 ry = (meteor.y - cy) * (length / meteor.z);
 ry += cy;
 rr = 1 * (length / meteor.z);

 ctx.fillStyle = "rgba(255, 255, 255, "+meteor.a+")";
 ctx.fillRect(rx, ry, rr, rr);
}}
executeFrame();
function select(element){
element.addEventListener('webkitAnimationEnd', function(){
    this.style.webkitAnimationName = '';
}, false);
element.style.animation = "selectoption 0.2s cubic-bezier(0.86, 0, 0.07, 1) forwards" ;
}