class Enemy {

    constructor(context, game) {
        this._ctx = context;

        this._x = this._ctx.canvas.width - 25;
        this._y = 5;
        this._width = 15;
        this._height = 80;

        this._color = "#e00b0b";
        
        this._game = game;
    }

    whereIsTheBall(){
        return this._game.getBall();
    }

    verticalCenter(){
        return this._y + (this._height / 2);
    }

    refresh() {        
        const ball = this.whereIsTheBall();
        if ((this.verticalCenter() > ball.y) &&
          (this._y > 0)) {
            this._y -= 4;
        } else if ((this.verticalCenter() < ball.y) &&
          this._y < (this._ctx.canvas.height - this._height)) {
            this._y += 4;
        }
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