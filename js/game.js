class Game {

    constructor(context) {
        this._sprites = [];
        this._isRunning = false;
        this._ctx = context;
        this._tecladoHandler = new TecladoHandler(document);

        this.colisionHandler = new ColisionHandler();

        this.init();

        this._scoreboard = [0,0];
    }

    init() {
        const ballColor = "#42e71f";

        const halfScreenHeight = this._ctx.canvas.height / 2;
        const halfScreenWidth  = this._ctx.canvas.width / 2;

        let bola = new Bola(this._ctx, halfScreenWidth, halfScreenHeight, 10, 5, 5, ballColor);
        let hero = new Hero(this._ctx, this._tecladoHandler);
        let enemy = new Enemy(this._ctx, this);

        this.colisionHandler.addSprite(bola);
        this.colisionHandler.addSprite(hero);
        this.colisionHandler.addSprite(enemy);

        this.addSprite(bola);
        this.addSprite(hero);
        this.addSprite(enemy);
    }

    getBall(){
        return {
            x: this._sprites[0]._x,
            y: this._sprites[0]._y,
        }
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

        this.colisionHandler.detect();

        requestAnimationFrame(() => this.nextFrame());
    }
}