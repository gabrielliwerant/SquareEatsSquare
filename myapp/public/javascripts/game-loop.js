/**
 * game-loop.js
 *
 * Manages the creation and properties for our game loop object
 */

/**
 * Main game loop factory
 *
 * @returns {object}
 */
var createGameLoop = function() {
    var fps = 2;

    var lastCycleKeypress = '';

    var update = function() {
        if (typeof(game.keypress.keyCode) === 'undefined') {
            return;
        }

        console.log(game.keypress);

        switch (game.keypress.keyCode) {
            case LOWER_CASE_Q_KEY_CODE:
                this.end();
                break;
            case LOWER_CASE_D_KEY_CODE:
                ship.updateXPosRight();
                break;
        }

        lastCycleKeypress = game.keypress.keyCode;
    };

    var draw = function() {
        var svgSpec = 'http://www.w3.org/2000/svg';
        var shipEl = document.getElementById('ship');

        shipEl.setAttribute('x', ship.xPos);
    };

    var run = function() {
        update();
        draw();
    };

    var end = function() {
        clearInterval(gameLoop._intervalId);
    };

    return {
        fps: fps,
        lastCycleKeypress: lastCycleKeypress,
        update: update,
        draw: draw,
        end: end,
        run: run
    };
};

// Create game loop
game.loop = createGameLoop();