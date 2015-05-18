/**
 * game-board.js
 *
 * Maintain game board object properties
 */

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
        rightBound: width,
        leftBound: 0,
        bottomBound: height
    };
};

// Get game board
game.objs.board = getGameBoard();