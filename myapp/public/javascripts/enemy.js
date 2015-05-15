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

    var xPos = 100;
    var yPos = 100;
    var width = 10;
    var height = 10;

    rect.setAttribute('x', xPos);
    rect.setAttribute('y', yPos);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.id = 'enemy';

    svg.appendChild(rect);

    return {
        xPos: xPos,
        yPos: yPos,
        area: width * height
    };
};

// Create enemy
enemy = createEnemy();