class Enemy {

    constructor(context) {
        this._ctx = context;

        this._x = this._ctx.canvas.width - 25;
        this._y = 5;
        this._width = 15;
        this._height = 80;

        this._color = "#e00b0b"        
    }

    refresh() {
        
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