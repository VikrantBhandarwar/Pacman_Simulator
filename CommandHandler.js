const { Commands } = require('./constants/constants');
const { PLACE, MOVE, LEFT, RIGHT, REPORT } = Commands;

const {
  LeftCommand,
  RightCommand,
  MoveCommand,
  ReportCommand,
  PlaceCommand
} = require('./command');

/**
 * CommandHandler class
 * instantiate command handler with pacman and gridmatrix instances
 * @constructor
 * @var pacman pacman instance
 * @var grid gridmatrix instance
 */
class CommandHandler {
  constructor (pacman, grid) {
    this.leftCommand = new LeftCommand(pacman);
    this.rightCommand = new RightCommand(pacman);
    this.moveCommand = new MoveCommand(pacman, grid);
    this.reportCommand = new ReportCommand(pacman);
    this.placeCommand = new PlaceCommand(pacman, grid);
  }

  //split user input and parse the commands
  validateCommand (command) {
    let commandArgs = '';

    try {
      commandArgs = command.split(' ');
    } catch (e) {
      throw new Error('Invalid command');
    }

    if (![PLACE, MOVE, LEFT, RIGHT, REPORT].includes(commandArgs[0])) {
      throw new Error('Invalid command');
    }

    if (commandArgs[0] === PLACE && commandArgs.length === 2 && commandArgs[1].split(',').length === 3) {
      return;
    }

    if (commandArgs[0] !== PLACE && commandArgs.length === 1) {
      return;
    }

    throw new Error('Invalid command');
  }

  parseCommand (command) {
    this.validateCommand(command);

    const commandArgs = command.split(' ');
    if (commandArgs[0] === PLACE) {
      return this.parsePlaceCommand(command);
    }

    return { command };
  }

  // parse coordinates and directions from the input
  parsePlaceCommand (command) {
    const commandArgs = command.split(' ');
    const placeCommandArgs = commandArgs[1].split(',');

    const x = Number(placeCommandArgs[0]);
    const y = Number(placeCommandArgs[1]);
    const direction = placeCommandArgs[2];

    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new Error('Invalid command');
    }

    return { command: 'PLACE', input: [x, y, direction] };
  }

  //switch between the commands to execute correct command based on input
  execute (commandInput) {
    const { command, input } = this.parseCommand(commandInput);

    switch (command) {
      case PLACE:
        return this.placeCommand.handle(...input);

      case MOVE:
        return this.moveCommand.handle();

      case LEFT:
        return this.leftCommand.handle();

      case RIGHT:
        return this.rightCommand.handle();

      case REPORT:
        return this.reportCommand.handle();

      default:
        throw new Error('Invalid command');
    }
  }
}

module.exports = {
  CommandHandler
};
