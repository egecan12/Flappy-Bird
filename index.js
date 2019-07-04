var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

document.addEventListener("keydown", jump);

function jump() {
    bY = bY - 20;
}

var pipe = [];
pipe[0] = {

    x: 200,
    y: 300
}





//my images loading

var bg = new Image();
var northPipe = new Image();
var southPipe = new Image();
var bird = new Image();
var fg = new Image();

bg.src = "bb.png";
northPipe.src = "north.png";
southPipe.src = "south.png";
bird.src = "redbird.png";
fg.src = "https://github.com/sourabhv/FlapPyBird/blob/master/assets/sprites/base.png?raw=true"

var gap = 85;
var constant = southPipe.height - gap;

//bird position
var bX = 0;
var bY = 300;
var gravity = 1;

//draw

function draw() {

    ctx.drawImage(bg, 0, 0, 600, 800);


    for (var i = 0; i < pipe.length; i++) {
      

        ctx.drawImage(northPipe, pipe[i].x, pipe[i].y)

        ctx.drawImage(southPipe, pipe[i].x, pipe[i].y+constant)

        pipe[i].x--;

        if(pipe[i].x == 112) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random().southPipe)
            });

        }

    }
    ctx.drawImage(bird, bX, bY);
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    bY += gravity;
    requestAnimationFrame(draw)





}






draw();