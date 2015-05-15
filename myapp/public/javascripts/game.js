/**
 * game.js
 *
 * Set up our key listeners and run our main game loop
 */

document.onkeypress = function(event) {
    event = event || window.event;

    game.keypress = event;
};

game.loop._intervalId = setInterval(game.loop.run, 1000 / game.loop.fps);