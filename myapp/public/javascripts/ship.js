/**
 * ship.js
 *
 * Manages creation and properties for our ship object
 */

// Alias our ship object
var ship = game.objs.ship;

// Add initial properties
ship.xPos = 10;
ship.yPos = 10;

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