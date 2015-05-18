/**
 * ship.js
 *
 * Manages creation and properties for our ship object
 */

// Alias our ship object
var ship = game.objs.ship;

/**
 * Main game board factory
 *
 * @returns {object}
 */
var createShip = function() {
    var svg = document.getElementById('game-board');
    var rect = document.createElementNS(SVG_SPEC, 'rect');

    var xPos = 10;
    var yPos = 10;

    var speed = 5;

    rect.setAttribute('x', xPos);
    rect.setAttribute('y', yPos);
    rect.setAttribute('width', 50);
    rect.setAttribute('height', 50);
    rect.id = 'ship';

    svg.appendChild(rect);

    return {
        xPos: xPos,
        yPos: yPos,
        updateXPosRight: function() {
            this.xPos += speed;
        },
        updateXPosLeft: function() {
            if (this.xPos - speed < gameBoard.leftBound) {
                console.log('left boundary hit');

                return false;
            }

            this.xPos -= speed;
        }
    }
};

// Create ship
ship = createShip();