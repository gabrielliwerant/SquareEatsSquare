var LOWER_CASE_Q_KEY_CODE = 113;
var LOWER_CASE_W_KEY_CODE = 119;
var LOWER_CASE_A_KEY_CODE = 97;
var LOWER_CASE_S_KEY_CODE = 115;
var LOWER_CASE_D_KEY_CODE = 100;

var game = {};
game.keypress = '';

var createGameLoop = function() {
    var fps = 2;

    var lastCycleKeypress = '';

    var update = function() {
        // Skip if we have no new keypress
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

var ship = {};
ship.xPos = 10;
ship.yPos = 10;

var createEnemyShip = function() {
    var svg = document.getElementById('game-board');
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    rect.setAttribute('x', 30);
    rect.setAttribute('y', 60);
    rect.setAttribute('width', 50);
    rect.setAttribute('height', 80);
    rect.setAttribute('style', "stroke:#000000; fill:none;");
    rect.id = "enemy-ship";

    svg.appendChild(rect);
};

ship.create = function() {
    var svg = document.getElementById('game-board');
    var svgSpec = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgSpec, 'rect');

    rect.setAttribute('x', this.xPos);
    rect.setAttribute('y', this.yPos);
    rect.setAttribute('width', 50);
    rect.setAttribute('height', 50);
    rect.id = 'ship';

    svg.appendChild(rect);
};

ship.updateXPosRight = function() {
    this.xPos += 10;
};

ship.create();
//createEnemyShip();

document.onkeypress = function(event) {
    event = event || window.event;

    game.keypress = event;
};

var gameLoop = createGameLoop();
gameLoop._intervalId = setInterval(gameLoop.run, 1000 / gameLoop.fps);