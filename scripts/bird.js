'use strict';

App.Bird = class Bird {

    #radius = 15;

    x0 = 0;
    y0 = 0;

    x1 = 0;
    y1 = 0;

    constructor(x, y) {
        this.x0 = x;
        this.y0 = y;

        console.log(this.x0, this.#radius);
    }

    move(velocity) {
        this.x -= velocity;

        this._draw();
    };

    toString() {
        console.log('x0', this.x0, 'y0', this.y0, 'x1', this.x1, 'y1', this.y1, 'radius', this.#radius);
    }

// ########################## PRIVATE ##########################

    _draw() {
        Gctx.fillStyle = "green";
        Gctx.fillRect(self.x, self.y, w, h);

        self.x1 = self.x + w;
        self.y1 = self.y + h;
    }


};
