class Hero {

    constructor(context){
        this._x = 10;
        this._y = 5;
        this._width = 15;
        this._height = 80;

        this._color = "#4ca2bf"

        this._ctx = context;
    }

    refresh() {

    }

    selfDraw() {
        this._ctx.save();
        this._ctx.fillStyle = this._color;

        this._ctx.fillRect(this._x, this._y, this._width, this._height);

        this._ctx.restore();
    }
}