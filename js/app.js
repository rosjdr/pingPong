const canvas = document.querySelector("#gameScreen");
const ctx = canvas.getContext("2d");

let game = new Game(ctx);

game.start();