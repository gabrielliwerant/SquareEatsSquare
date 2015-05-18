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
    var ship = game.objs.ship;

    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var getNewCoordinates = function(width, height) {
        var x = getRandomInt(0, gameBoard.width - width);
        var y = getRandomInt(0, gameBoard.height - height);

        var enemy = squareEatsSquare.game.objs.enemy;
        var yShipTop = ship.yPos;
        var yShipBottom = ship.yPos + ship.height;
        var xShipLeft = ship.xPos;
        var xShipRight = ship.xPos + ship.width;

        // If new enemy would appear inside the player square, get new coordinates
        if (yShipBottom > y && yShipTop < y) {
            if (xShipRight > x && xShipLeft < x) {
                return getNewCoordinates(width, height);
            }
        }

        return {
            x: x,
            y: y
        }
    };
    var width = getRandomInt(10, 40);
    var height = getRandomInt(10, 40);
    var coordinates = getNewCoordinates(width, height);
    var xPos = coordinates.x;
    var yPos = coordinates.y;

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