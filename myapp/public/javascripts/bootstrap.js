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
    return {
        game: {
            keypress: '',
            loop: {},
            objs: {
                board: {},
                ship: {},
                enemy: {}
            }
        }
    }
};

// Create initial game object with namespace
var squareEatsSquare = createSquareEatsSquareGame();

// Make alias for game
var game = squareEatsSquare.game;