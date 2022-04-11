canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
newWidth = screen.width - 100;
newHeight = screen.height - 100;
width = screen.width;
var lastx, lasty;
setColor = "black";



if (width < 992){
    document.body.style.overflow = "hidden";
    document.getElementById("canvas").width = newWidth;
    document.getElementById("canvas").height = newHeight;
}


canvas.addEventListener("touchmove", touchmove);
function touchmove(e){
touchX = e.touches[0].clientX - canvas.offsetLeft;
touchY = e.touches[0].clientY - canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle = setColor;
ctx.lineWidth = 3;
ctx.moveTo(lastx, lasty);
ctx.lineTo(touchX, touchY);
ctx.stroke();

lastx = touchX;
lasty = touchY;

}


canvas.addEventListener("touchstart", touchstart);
function touchstart(e){
    setColor = document.getElementById("textinput").value ; 
    touchX = e.touches[0].clientX - canvas.offsetLeft;
    touchY = e.touches[0].clientY - canvas.offsetTop;
}


function clearcanvas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
