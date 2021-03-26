class TecladoHandler {
    
    constructor(element){
        this._arrowUp = 38;
        this._arrowDown = 40;   

        this._pressionadas = [];        

        element.addEventListener('keydown', (evento) => this._pressionadas[evento.keyCode] = true);
        element.addEventListener('keyup', (evento) => this._pressionadas[evento.keyCode] = false);
    }

    pressionada(key) {
        return this._pressionadas[key];
    }
}