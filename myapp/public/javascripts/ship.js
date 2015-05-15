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
    var width = 50;
    var height = 50;

    var speed = 5;

    var cancelMovement = function() {
        game.keypress = '';
    };

    var updateYPosUp = function() {
        if (this.yPos - speed < gameBoard.topBound) {
            console.log('top boundary hit');

            this.cancelMovement();

            return false;
        }

        this.yPos -= speed;
    };

    var updateXPosLeft = function() {
        if (this.xPos - speed < gameBoard.leftBound) {
            console.log('left boundary hit');

            this.cancelMovement();

            return false;
        }

        this.xPos -= speed;
    };

    var updateYPosDown = function() {
        if (this.yPos + height + speed > gameBoard.bottomBound) {
            console.log('bottom boundary hit');

            this.cancelMovement();

            return false;
        }

        this.yPos += speed;
    };

    var updateXPosRight = function() {
        if (this.xPos + width + speed > gameBoard.rightBound)
        {
            console.log('right boundary hit');

            this.cancelMovement();

            return false;
        }

        this.xPos += speed;
    };

    rect.setAttribute('x', xPos);
    rect.setAttribute('y', yPos);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.id = 'ship';

    svg.appendChild(rect);

    return {
        xPos: xPos,
        yPos: yPos,
        area: width * height,
        updateYPosUp: updateYPosUp,
        updateXPosLeft: updateXPosLeft,
        updateYPosDown: updateYPosDown,
        updateXPosRight: updateXPosRight,
        cancelMovement: cancelMovement
    };
};

// Create ship
ship = createShip();