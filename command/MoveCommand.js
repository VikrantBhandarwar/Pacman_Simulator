const { Command } = require('./Command');
const { Directions } = require('../constants/constants');
const { NORTH, WEST, SOUTH, EAST } = Directions;
const chalk = require("chalk");

class MoveCommand extends Command {
  constructor (pacman, grid) {
    super(pacman);
    this.grid = grid;
  }
  /**
	 * move the pacman position based on the coordinates, throw error if invalid
	 */
  handle () {
    super.handle();
    if (!this.grid) {
      throw new Error(chalk.red('Please initialise a grid'));
    }

    let nextX = this.pacman.x;
    let nextY = this.pacman.y;

    switch (this.pacman.direction) {
      case NORTH:
        nextY = nextY + 1;
        break;
      case EAST:
        nextX = nextX + 1;
        break;
      case SOUTH:
        nextY = nextY - 1;
        break;
      case WEST:
        nextX = nextX - 1;
        break;

      default:
        throw new Error(chalk.red('Invalid pacman direction'));
    }

    if (!this.grid.validate(nextX, nextY)) {
      throw new Error('Invalid moving position');
    }

    this.pacman.move(nextX, nextY);
  }
}

module.exports = {
  MoveCommand
};