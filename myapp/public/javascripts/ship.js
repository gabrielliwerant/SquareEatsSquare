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
    var gameBoard = game.objs.board;

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

    var detectEnemyCollision = function() {
        var enemy = squareEatsSquare.game.objs.enemy;
        var yShipTop = this.yPos;
        var yShipBottom = this.yPos + this.height;
        var xShipLeft = this.xPos;
        var xShipRight = this.xPos + this.width;
        var yEnemyTop = enemy.yPos;
        var yEnemyBottom = enemy.yPos + enemy.height;
        var xEnemyLeft = enemy.xPos;
        var xEnemyRight = enemy.xPos + enemy.width;

        if (yShipBottom > yEnemyTop && yShipTop < yEnemyBottom) {
            if (xShipRight > xEnemyLeft && xShipLeft < xEnemyRight) {
                console.log('collision detected');

                this.eatEnemy(enemy);
                enemy.destroy();
                game.objs.enemy = game.create.enemy();
            }
        }
    };

    var eatEnemy = function(enemy) {
        var ship = document.getElementById('ship');
        var sizeIncrement = Math.floor((enemy.width + enemy.height) / 2);

        this.width += sizeIncrement;
        this.height += sizeIncrement;

        ship.setAttribute('width', this.width);
        ship.setAttribute('height', this.height);
    };

    var init = function() {
        rect.setAttribute('x', xPos);
        rect.setAttribute('y', yPos);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.id = 'ship';

        svg.appendChild(rect);
    };

    init();

    return {
        xPos: xPos,
        yPos: yPos,
        width: width,
        height: height,
        area: width * height,
        updateYPosUp: updateYPosUp,
        updateXPosLeft: updateXPosLeft,
        updateYPosDown: updateYPosDown,
        updateXPosRight: updateXPosRight,
        detectEnemyCollision: detectEnemyCollision,
        cancelMovement: cancelMovement,
        eatEnemy: eatEnemy
    };
};

// Create ship
game.objs.ship = createShip();