class Hero {

    constructor(context, tecladoHandler) {
        this._x = 10;
        this._y = 5;
        this._width = 15;
        this._height = 80;

        this._color = "#4ca2bf"

        this._ctx = context;
        this._tecladoHandler = tecladoHandler;
    }

    refresh() {
        if (this._tecladoHandler.pressionada(this._tecladoHandler._arrowDown) &&
            this._y < (this._ctx.canvas.height - this._height)) this._y += 10;
        else if (this._tecladoHandler.pressionada(this._tecladoHandler._arrowUp) &&
            this._y > 0) this._y -= 10;
    }

    selfDraw() {
        this._ctx.save();
        this._ctx.fillStyle = this._color;

        this._ctx.fillRect(this._x, this._y, this._width, this._height);

        this._ctx.restore();
    }

    getSquaresToColision() {
        return [{
            x: this._x, //x is the center of ball
            y: this._y, //idem
            width: this._width,
            height: this._height
        }]

    }

    colisionWith(sprite){}
}