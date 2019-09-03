
App.CONST = {
    gravity: 5,
    speed: 1
};

App.spriteList = {};

App.canvas = null;
App.ctx = null;


Gcanvas = null;
Gctx = null;
G_GRAVITY = 5;
G_VELOCITY = 2;

App.Game = new class Game {



    run() {
        // App.spriteList[ 'bird' ]
        let sprite = new App.Sprite("assets/sprite.png", 0, 480, 30, 30);
        console.log(sprite.img);
        let img  = new Image();
        img.src = "assets/sprite.png";
        img.onload = function() {
            App.ctx.drawImage(img, 0, 485, 30, 30, 10, 10, 30, 30 );
        }
        // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

    };

    update() {
        // draw background
        App.ctx.fillStyle = "#4ed0f5";
        App.ctx.fillRect(0, 0, Gcanvas.width, Gcanvas.height);

        // move pipes
        pipe.move(G_VELOCITY);

        // move bird
        let move = pressed ? -25 * G_GRAVITY * pressed : G_GRAVITY;
        console.log('move ', move);
        bird.move(move);
        pressed = 0;



        // Loop game and redraw canvas
        requestAnimationFrame(update);

    };

    keypress(e) {

    };
};




window.onload = function () {
    App.canvas = document.getElementById('canvas');
    App.ctx = App.canvas.getContext('2d');

    App.Game.run();

    document.addEventListener('keydown', function (e) {
        App.Game.keypress(e);
    });
};
/*

function Game() {
    let pressed = 0;
    /!**
     * @type Pipe
     *!/
    let pipe = null;
    /!**
     * @type Bird
     *!/
    let bird = null;
    let pipes = [];

    this.run = function () {
        console.log('Game started');

        // init all staff
        pipe = new Pipe(Gcanvas.width);
        bird = new Bird(0, 0);

        // run loop
        update();
    };


    function update() {
        // draw background
        Gctx.fillStyle = "#4ed0f5";
        Gctx.fillRect(0, 0, Gcanvas.width, Gcanvas.height);

        // move pipes
        pipe.move(G_VELOCITY);

        // move bird
        let move = pressed ? -25 * G_GRAVITY * pressed : G_GRAVITY;
        console.log('move ', move);
        bird.move(move);
        pressed = 0;



        // Loop game and redraw canvas
        requestAnimationFrame(update);

    }

    this.keypress = function () {
        pressed++;
    }

};


// ###################################################################################################################
/!**
 * Pipe Class
 * @constructor
 *!/
function Pipe(x, y) {
    let self = this;

    let w = 100,
        h = 150;

    this.x = x || 0;
    this.y = y || 0;

    this.x1 = 0;
    this.y1 = 0;

    this.move = function (velocity) {
        this.x -= velocity;

        draw();
    };

    function draw() {
        Gctx.fillStyle = "green";
        Gctx.fillRect(self.x, self.y, w, h);

        self.x1 = self.x + w;
        self.y1 = self.y + h;
    }

    draw();
};


// ###################################################################################################################
/!**
 * Bird Class
 * @constructor
 *!/
function Bird(x, y) {
    let self = this;

    let radius = 20;
    this.x = x + radius;
    this.y = y + radius;

    this.x1 = 0;
    this.y1 = 0;

    this.move = function (gravity) {
        this.y += gravity;
        console.log('y ', this.y);
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y1 > Gcanvas.height) {
            this.y = Gcanvas.height - radius;
        }
        draw();
    };

    function draw() {
        Gctx.beginPath();
        Gctx.fillStyle = "yellow";
        Gctx.arc(self.x, self.y, radius, 0, Math.PI * 2);
        Gctx.fill();

        self.x1 = self.x + radius * 2;
        self.y1 = self.y + radius * 2;
    }

    draw();
};

// ###################################################################################################################*/
