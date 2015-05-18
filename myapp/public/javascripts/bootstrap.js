/**
 * bootstrap.js
 *
 * Initial our Square Eats Square main game object and conditions
 */

/**
 * Initial game object factory
 *
 * @returns {object}
 */
var createSquareEatsSquareGame = function() {
    var destroy = function(objType) {
        delete this.objs[objType];
        this.objs[objType] = {};
    };

    return {
        game: {
            keypress: '',
            loop: {},
            destroy: destroy,
            create: {},
            objs: {
                board: {},
                ship: {},
                enemy: {},
                score: {}
            }
        }
    };
};

// Create initial game object with namespace
var squareEatsSquare = createSquareEatsSquareGame();

// Make alias for game
var game = squareEatsSquare.game;