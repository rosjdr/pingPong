class Bola {

    constructor(context, x, y, r, speedX, speedY, color = "#1F1F1F"){
        this._ctx = context;
        this._x = x;
        this._y = y;
        this._raio = r;
        this._color = color;

        this.speedX = speedX;
        this.speedY = speedY;
    }

    refresh() {
        if (this._x < this._raio || this._x > this._ctx.canvas.width - this._raio) {
            this.speedX *= -1;
        }  
        
        if (this._y < this._raio || this._y > this._ctx.canvas.height - this._raio) {
            this.speedY *= -1;
        } 

        this._x += this.speedX;
        this._y += this.speedY;

    }

    selfDraw() {
        this._ctx.save();
        this._ctx.fillStyle = this._color;

        this._ctx.beginPath();
        this._ctx.arc(this._x, this._y, this._raio, 0, 2 * Math.PI, false);
        this._ctx.fill();

        this._ctx.restore();
    }


}