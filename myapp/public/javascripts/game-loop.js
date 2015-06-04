/**
 * game-loop.js
 *
 * Manages the creation and properties for our game loop object
 */

(function() {
/**
 * Main game loop factory
 *
 * @returns {object}
 */
var createGameLoop = function() {
    var fps = 60;
    var lastCycleKeypress = '';
    var ship = game.objs.ship;

    var update = function() {
        if (typeof(game.keypress.keyCode) === 'undefined' || game.keypress.keyCode === '') {
            return false;
        }

        console.log(game.keypress);

        switch (game.keypress.keyCode) {
            case LOWER_CASE_Q_KEY_CODE:
                this.end();
                break;
            case LOWER_CASE_W_KEY_CODE:
                ship.updateYPosUp();
                ship.detectEnemyCollision();
                break;
            case LOWER_CASE_A_KEY_CODE:
                ship.updateXPosLeft();
                ship.detectEnemyCollision();
                break;
            case LOWER_CASE_S_KEY_CODE:
                ship.updateYPosDown();
                ship.detectEnemyCollision();
                break;
            case LOWER_CASE_D_KEY_CODE:
                ship.updateXPosRight();
                ship.detectEnemyCollision();
                break;
        }

        lastCycleKeypress = game.keypress.keyCode;
    };

    var draw = function() {
        var shipEl = document.getElementById('ship');

        shipEl.setAttribute('x', ship.xPos);
        shipEl.setAttribute('y', ship.yPos);
    };

    var run = function() {
        update();
        draw();
    };

    var end = function() {
        console.log('game over');

        var alert = document.getElementById('alert');
        alert.innerHTML = 'GAME OVER (Refresh browser to play again.)';

        clearInterval(game.loop._intervalId);
        clearInterval(game.loop._gameOverIntervalId);
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
}());