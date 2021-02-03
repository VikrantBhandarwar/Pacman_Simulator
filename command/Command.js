/**
 * Command Interface of Command Pattern
 */
class Command {
    constructor (pacman) {
      this.pacman = pacman;
    }
  
      /**
     * Execute method
     * @return
     */
    handle () {
      //check instance is valid
      if (!this.pacman) {
        throw new Error('Please initialise a pacman');
      }
  
      if (!this.pacman.isPlacedOnGrid()) {
        throw new Error('Pacman is not on grid, please run PLACE command first');
      }
    }
  }
  
  module.exports = {
    Command
  };