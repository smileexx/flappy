'use strict';

App.Pipe = class Pipe {
    w = 100;
    h = 0;

    x = 0;
    y = 0;

    x1 = 0;
    y1 = 0;

    constructor( height ) {
        this.h = height;

    }

    move (velocity) {
        this.x -= velocity;

        this._draw();
    }


// ########################## PRIVATE ##########################

    _draw(){
        App.ctx.fillStyle = "green";
        App.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.x1 = this.x + this.w;
        this.y1 = this.y + this.h;
    }
};