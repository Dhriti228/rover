canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_images_array=["nasa.jpeg","nasa2.jpeg","nasa3.jpeg"];
random_number=Math.floor(Math.random()*4);
roverwidth=100;
roverheight=90;
backgroundimg=nasa_images_array[random_number];
console.log("backgroundimg"+backgroundimg);
roverimg="rover.png";
rover_x=10;
rover_y=10;
function add(){
    backgroundimg_tag=new Image();
    backgroundimg_tag.onload=uploadbackground;
    backgroundimg_tag.src=backgroundimg;

    roverimg_tag=new Image();
    roverimg_tag.onload=uploadrover;
    roverimg_tag.src=roverimg;
}
function uploadbackground(){
    ctx.drawImage(backgroundimg_tag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimg_tag,rover_x,rover_y,roverwidth,roverheight);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if (keyPressed == '40')
    {
        down();
        console.log("down");
    }if (keyPressed == '37')
    {
        left();
        console.log("left");
    }if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
}
function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("When up arrow is pressed,x="+rover_x,"y="+rover_y)
        uploadbackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("When down arrow is pressed,x="+rover_x,"y="+rover_y)
        uploadbackground();
        uploadrover();
    }
}function left()
{
    if(rover_x>0)
    {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed,x="+rover_x,"y="+rover_y)
        uploadbackground();
        uploadrover();
    }
}function right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("When right arrow is pressed,x="+rover_x,"y="+rover_y)
        uploadbackground();
        uploadrover();
    }
}



