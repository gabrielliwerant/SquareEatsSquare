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

    var xPos = 225;
    var yPos = 225;
    var width = 25;
    var height = 25;

    var speed = 5;

    var cancelMovement = function() {
        game.keypress = '';
    };

    var updateYPosUp = function() {
        if (this.yPos - this.speed < gameBoard.topBound) {
            console.log('top boundary hit');

            this.cancelMovement();

            return false;
        }

        this.yPos -= this.speed;
    };

    var updateXPosLeft = function() {
        if (this.xPos - this.speed < gameBoard.leftBound) {
            console.log('left boundary hit');

            this.cancelMovement();

            return false;
        }

        this.xPos -= this.speed;
    };

    var updateYPosDown = function() {
        if (this.yPos + this.height + this.speed > gameBoard.bottomBound) {
            console.log('bottom boundary hit');

            this.cancelMovement();

            // Move to boundary
            this.yPos += gameBoard.bottomBound - (this.yPos + this.height);

            return false;
        }

        this.yPos += this.speed;
    };

    var updateXPosRight = function() {
        if (this.xPos + this.width + this.speed > gameBoard.rightBound)
        {
            console.log('right boundary hit');

            this.cancelMovement();

            // Move to boundary
            this.xPos += gameBoard.rightBound - (this.xPos + this.width);

            return false;
        }

        this.xPos += this.speed;
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
        speed: speed,
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