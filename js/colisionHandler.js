class ColisionHandler {

    constructor(){
        this._sprites = [];
        this._onColision = null;
    }

    get sprites() {
        return [].concat(this._sprites);
    }

    addSprite(sprite){
        this._sprites.push(sprite);
    }

    detect(){
        let tested = new Set();

        this._sprites.forEach(obj => {
            tested.add(obj);
            this._sprites.forEach(target => {
                if (!tested.has(target)) {
                    this.testColision(obj, target);
                }

                // if (obj != target) this.testColision(obj, target);
            })
        }) 
    }

    testColision(obj, target) {
        const squaresX = obj.getSquaresToColision();
        const squaresY = target.getSquaresToColision();

        squaresX.forEach(squareX => {
            squaresY.forEach(squareY => {
                if (this.squareColision(squareX, squareY)) {
                    obj.colisionWith(target);
                    target.colisionWith(obj);

                    if (this._onColision) {
                        this._onColision(obj, target);
                    }

                }
            })
        });
    }

    squareColision(sX, sY){
        return (sX.x + sX.width) > sY.x && (sY.x + sY.width) > sX.x && (sX.y + sX.height) > sY.y && (sY.y + sY.height) > sX.y;            
    }
}