var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

//my images loading

var bg = new Image();
var northPipe=new Image();
var southPipe=new Image();
var bird=new Image();
var fg = new Image();

bg.src="bb.png";
northPipe.src= "north.png";
southPipe.src= "south.png";
bird.src="redbird.png";
fg.src="https://github.com/sourabhv/FlapPyBird/blob/master/assets/sprites/base.png?raw=true"

var gap = 85;
var constant = southPipe.height-gap;

//bird position
var bX=0;
var bY=300;
var gravity =1 ;

//draw

function draw(){

ctx.drawImage(bg,0,0,600,800);
ctx.drawImage(northPipe,200,0+constant);
ctx.drawImage(southPipe,200,400);
ctx.drawImage(bird,bX,bY);
ctx.drawImage(fg,0,cvs.height-fg.height);
bY += gravity;
requestAnimationFrame(draw)
}


draw();