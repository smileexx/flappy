Gcanvas = null;
Gctx = null;
window.onload = function () {
    window.Gcanvas = document.getElementById('canvas');
    window.Gctx = Gcanvas.getContext('2d');
    let game = new Game();
    game.run();
};


function Game() {

    let bird = null;
    let pipes = [];

    this.run = function () {
        console.log('Game started');

        // init all staff

        bird = new Bird(50, 50);
    };


    function update() {
        // do some action

        // Loop game and redraw canvas
        // requestAnimationFrame(update);
    }

};


// ###################################################################################################################
/**
 * Pipe Class
 * @constructor
 */
function Pipe() {

};


// ###################################################################################################################
/**
 * Bird Class
 * @constructor
 */
function Bird(x, y) {
    let size = 20;
    Gctx.beginPath();
    Gctx.arc(x, y, size, 0, Math.PI * 2);
    Gctx.fill();

};

// ###################################################################################################################