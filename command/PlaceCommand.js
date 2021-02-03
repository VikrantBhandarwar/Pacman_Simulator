const { Command } = require('./Command');
const { Directions } = require('../constants/constants');
const { NORTH,SOUTH,EAST,WEST } = Directions;
/**
 * PlaceCommand class
 * instantiate command handler with pacman and gridmatrix instances
 * @constructor
 * @var pacman pacman instance
 * @var grid gridmatrix instance
 */
class PlaceCommand extends Command {
  constructor (pacman, grid) {
    super(pacman);
    this.grid = grid;
  }

  // sets the properties for the pacman class
  handle (x, y, direction) {

    if (!this.grid) {
      throw new Error('Please initialise a grid');
    }

    if (!this.grid.validate(x, y)) {
      throw new Error('Pacman is placed at an invalid place, please try again');
    }

    if (![NORTH, WEST, SOUTH, EAST].includes(direction)) {
      throw new Error('Pacman is placed at an invalid direction, please try again');
    } 

    this.pacman.x = x;
    this.pacman.y = y;
    this.pacman.direction = direction;
  }
}

module.exports = {
  PlaceCommand
};
