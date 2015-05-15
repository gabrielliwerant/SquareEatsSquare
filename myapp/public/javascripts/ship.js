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
    var svgSpec = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgSpec, 'rect');

    var xPos = 10;
    var yPos = 10;

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
            this.xPos += 10;
        },
        updateXPosLeft: function() {
            this.xPos -= 10;
        }
    }
};

// Create ship
ship = createShip();