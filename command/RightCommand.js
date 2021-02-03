const { Command } = require("./Command");
const { Directions } = require("../constants/constants");
const { NORTH, WEST, SOUTH, EAST } = Directions;

class RightCommand extends Command {
  /**
   * move the pacman position based on the coordinates, throw error if invalid
   */
  handle() {
    super.handle();
    switch (this.pacman.direction) {
      case NORTH:
        this.pacman.direction = EAST;
        break;

      case WEST:
        this.pacman.direction = NORTH;
        break;

      case SOUTH:
        this.pacman.direction = WEST;
        break;

      case EAST:
        this.pacman.direction = SOUTH;
        break;

      default:
        throw new Error("Invalid pacman direction");
    }
  }
}

module.exports = {
  RightCommand,
};
