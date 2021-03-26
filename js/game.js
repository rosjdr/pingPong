class Game {

    constructor(context) {
        this._sprites = [];
        this._isRunning = false;
        this._ctx = context;
        console.log(this._ctx);

        this.init();
    }

    init() {
        const ballColor = "#FFFFFF";
        let bola = new Bola(this._ctx, 10, 10, 10, 5, 5, ballColor);
        let hero = new Hero(this._ctx);

        this.addSprite(bola);
        this.addSprite(hero);
    }

    clearScreen() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);

    }

    addSprite(sprite) {
        this._sprites.push(sprite);
    }

    start() {
        this._isRunning = true;
        this.nextFrame();
    }

    stop() {
        this._isRunning = false;
    }

    nextFrame() {

        if (!this._isRunning) return;

        //isRunning
        this.clearScreen();

        //update all sprites states
        this._sprites.forEach(sprite => sprite.refresh());

        //redraw all sprites on screen
        this._sprites.forEach(sprite => sprite.selfDraw());

        requestAnimationFrame(() => this.nextFrame());
    }
}