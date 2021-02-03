const { Command } = require('./Command');

/**
* call parent method to print current position
*/
class ReportCommand extends Command {
  handle () {
    super.handle();
    this.pacman.print();
  }
}

module.exports = {
  ReportCommand
};