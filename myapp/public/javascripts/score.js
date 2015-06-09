/**
 * score.js
 *
 * Maintain score object properties
 */

(function() {
    /**
     * Score factory
     *
     * @returns {object}
     */
    var createScore = function() {
        var initialScore = 0;
        var score = document.getElementById('score');

        var update = function(enemyArea) {
            this.value += enemyArea;
            score.innerHTML = this.value;
        };

        var init = function() {
            score.innerHTML = initialScore;
        };

        init();

        return {
            value: initialScore,
            update: update
        };
    };

    // Get game board
    game.objs.score = createScore();
}());