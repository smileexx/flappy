App.Sprite = class Sprite {
    get img() {
        return this.#sprite;
    }

    /*set img(value) {
        this._img = value;
    }*/

    #sprite = new Image();

    x = 0;
    y = 0;
    w = 0;
    h = 0;

    constructor(path, x, y, w, h) {
        this.#sprite.src = path;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

};