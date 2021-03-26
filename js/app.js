function game() {
    createBall(x, y, r);
    moveBall();
}

function moveBall(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);  

    let agora = new Date().getTime();
    
    let decorrido = agora - anterior;
    
    let velocidade = 20;
    x += velocidade * decorrido / 1000;
    createBall(x, y, r);

    anterior = agora;
    requestAnimationFrame(moveBall);
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
let x = 100;
let y = 100;
let r = 10;

const canvas = document.querySelector("#gameScreen");
const ctx = canvas.getContext("2d");

let anterior = new Date().getTime();

game();