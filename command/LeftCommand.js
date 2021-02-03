const { Command } = require('./Command');
const { Directions } = require('../constants/constants');
const { NORTH, WEST, SOUTH, EAST } = Directions;

class LeftCommand extends Command {

 /**
	 * move the pacman position based on the coordinates, throw error if invalid
	 */   
  handle () {
    super.handle();
    switch (this.pacman.direction) {
      case EAST:
        this.pacman.direction = NORTH;
        break;

      case NORTH:
        this.pacman.direction = WEST;
        break;

      case WEST:
        this.pacman.direction = SOUTH;
        break;

      case SOUTH:
        this.pacman.direction = EAST;
        break;

      default:
        throw new Error('Invalid pacman direction');
    }
  }
}

module.exports = {
  LeftCommand
};
