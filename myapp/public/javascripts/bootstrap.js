/**
 * bootstrap.js
 *
 * Initial our Square Eats Square main game object and conditions
 */

// Initialize namespace for game
var squareEatsSquare = {} || squareEatsSquare;

(function() {
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
                timeLimit: 30,
                objs: {
                    board: {},
                    ship: {},
                    enemy: {},
                    score: {}
                }
            }
        };
    };

    // Create initial game object in our namespace
    squareEatsSquare = createSquareEatsSquareGame();
}());

// Make alias for game
var game = squareEatsSquare.game;