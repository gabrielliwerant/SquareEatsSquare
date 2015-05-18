## Square Eats Square

A game of squares

### Installing

1. `npm install`
2. `grunt nodemon`
3. Navigate to `http://localhost:666` in browser (only tested in Chrome)
4. `grunt dev` (optional, builds for production version)

### How to Play

Move the player square with the w, a, s, d keys. Colliding with the red square will cause you to grow and gain points
by the area of the swallowed square. The game ends in 30 seconds. Refresh the browser to play again.

### Roadmap

- Add/utilize libraries for svg/javascript
- Allow player to "win" by growing the square larger than the game board boundaries
- Add power-ups, power-downs, enemies that shrink you and/or decrease points
- Improve graphics
- Improve hit detection
- Improve object-oriented code
- Improve performance
- Add more sophisticated physics for movement
- Use LESS or SASS instead of vanilla CSS