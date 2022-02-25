function setup()
{
canvas=createCanvas(500,500);
canvas.position(100,300);
camera=createCapture(VIDEO);
camera.hide();
tintColour="";
}
function draw()
{
    image(camera,0,0,500,500);
    tint(tintColour);
}
function take_snapshot()
{
    save('Image_Colour.jpeg');
}
function filter_tint()
{
    tintColour=document.getElementById("colour_name").value;
}