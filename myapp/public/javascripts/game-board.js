/**
 * game-board.js
 *
 * Maintain game board object properties
 */

// Alias our game board
var gameBoard = game.objs.board;

/**
 * Main game board factory
 *
 * @returns {object}
 */
var getGameBoard = function() {
    var gameBoard = document.getElementById('game-board');
    var width = gameBoard.width.baseVal.value;
    var height = gameBoard.height.baseVal.value;
    var border = 10;
    var area = (width - border) * (height - border);

    return {
        width: width,
        height: height,
        area: area,
        topBound: 0,
        rightBound: width - border,
        leftBound: 0,
        bottomBound: height - border

    }
};

// Get game board
gameBoard = getGameBoard();