/**
 * Pacman class dependencies
 * @constructor
 * @var {int} x pacman horizontal position
 * @var {int} y pacman vertical position
 * @var {int} direction pacman facing direction - array index map with config direction
 */

const chalk = require("chalk");

class Pacman {

    //constructor
  constructor (x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  // set coordinates
  move (x, y) {
    this.x = x;
    this.y = y;
  }

  // set direction
  turn (direction) {
    this.direction = direction;
  }

  //check if x,y coordinates fall on the grid
  isPlacedOnGrid () {
    let {x, y, direction} = this;
    return x >= 0 && y >= 0 && !!direction;
  }

  //print direction
  print () {
    let {x, y, direction} = this;

    console.log(chalk.green(`${x},${y},${direction}`));
  }
}

module.exports = {
    Pacman
};
