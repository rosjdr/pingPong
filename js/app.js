function game() {            
    createBall(100, 100, 10);
}

function createBall(x, y, r) {
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.strokeStyle = ballColor;
    ctx.stroke();
    ctx.fillStyle = ballColor;
    ctx.fill();
}

//globals and configurations
const ballColor = "#FFFFFF";
const canvas = document.querySelector("#gameScreen");
const ctx = canvas.getContext("2d");

game();