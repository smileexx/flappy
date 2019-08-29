Gcanvas = null;
Gctx = null;
G_GRAVITY = 7;
G_VELOCITY = 2;
window.onload = function () {
    window.Gcanvas = document.getElementById('canvas');
    window.Gctx = Gcanvas.getContext('2d');
    let game = new Game();
    game.run();
};


function Game() {

    /**
     * @type Pipe
     */
    let pipe = null;
    /**
     * @type Bird
     */
    let bird = null;
    let pipes = [];

    this.run = function () {
        console.log('Game started');

        // init all staff
        pipe = new Pipe(Gcanvas.width / 2);
        bird = new Bird(50, 50);

        // run loop
        update();
    };


    function update() {
        // draw background
        Gctx.fillStyle = "#4ed0f5";
        Gctx.fillRect(0, 0, Gcanvas.width, Gcanvas.height);

        // Loop game and redraw canvas

        bird.move(G_GRAVITY);
        pipe.move(G_VELOCITY);

        requestAnimationFrame(update);
    }

};


// ###################################################################################################################
/**
 * Pipe Class
 * @constructor
 */
function Pipe(x, y) {
    let self = this;
    this.x = x || 0;
    this.y = y || 0;


    this.move = function (velocity) {
        this.x -= velocity;

        draw();
    };

    function draw() {
        Gctx.fillStyle = "green";
        Gctx.fillRect(self.x, self.y, 100, 150);
    }

    draw();
};


// ###################################################################################################################
/**
 * Bird Class
 * @constructor
 */
function Bird(x, y) {
    let size = 20;
    let self = this;

    this.x = x;
    this.y = y;

    this.move = function (gravity) {
        this.y += gravity;

        draw();
    };

    function draw() {
        Gctx.beginPath();
        Gctx.fillStyle = "yellow";
        Gctx.arc(self.x, self.y, size, 0, Math.PI * 2);
        Gctx.fill();
    }

    draw();
};

// ###################################################################################################################