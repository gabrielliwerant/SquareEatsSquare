/**
 * enemy.js
 *
 * Manages creation and properties for our enemy object
 */

// Alias our enemy object
var enemy = game.objs.enemy;

/**
 * Enemy object factory
 *
 * @returns {object}
 */
var createEnemy = function() {
    var svg = document.getElementById('game-board');
    var rect = document.createElementNS(SVG_SPEC, 'rect');
    var gameBoard = game.objs.board;

    var xPos = 100;
    var yPos = 100;
    var width = 10;
    var height = 10;

    var init = function() {
        rect.setAttribute('x', xPos);
        rect.setAttribute('y', yPos);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.id = 'enemy';

        svg.appendChild(rect);
    };

    var destroy = function() {
        var gameBoard = document.getElementById('game-board');
        var enemy = document.getElementById('enemy');

        if (enemy) {
            gameBoard.removeChild(enemy);
        }

        game.destroy('enemy');
    };

    init();

    return {
        xPos: xPos,
        yPos: yPos,
        width: width,
        height: height,
        area: width * height,
        destroy: destroy
    };
};

// Set objects and methods
game.create.enemy = createEnemy;
game.objs.enemy = game.create.enemy();