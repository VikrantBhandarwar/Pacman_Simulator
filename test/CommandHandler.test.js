const { CommandHandler } = require('../CommandHandler');

describe('CommandHandler tests', () => {
    describe('Test validateCommand', () => {
      it('should throw an error when command is not a string', () => {
        const commandHandler = new CommandHandler();
        expect(() => {
          commandHandler.validateCommand(123);
        }).toThrowError('Invalid command');
      });
  
      it('should throw an error when command is not "MOVE", "LEFT", "RIGHT", "REPORT" or "PLACE"', () => {
        const commandHandler = new CommandHandler();
        expect(() => {
          commandHandler.validateCommand('Invalid');
        }).toThrowError('Invalid command');
      });
  
      it('should throw an error when the number of "PLACE" command parameter is incorrect', () => {
        const commandHandler = new CommandHandler();
        expect(() => {
          commandHandler.validateCommand('PLACE 1,2,3,4');
        }).toThrowError('Invalid command');
      });
  
      it('should throw an error when passing parameter to command "MOVE"', () => {
        const commandHandler = new CommandHandler();
        expect(() => {
          commandHandler.validateCommand('MOVE 1');
        }).toThrowError('Invalid command');
      });
  
      it('should not throw error for valid "PLACE" command', () => {
        const commandHandler = new CommandHandler();
        commandHandler.validateCommand('PLACE 1,2,NORTH');
      });
    });
  
    describe('Test parseCommand', () => {
    const { CommandHandler } = require('../CommandHandler');
      it('should return command object for "MOVE" command', () => {
        const commandHandler = new CommandHandler();
        expect(commandHandler.parseCommand('MOVE')).toEqual({
          command: 'MOVE'
        });
      });
  
      it('should return command object for "LEFT" command', () => {
        const commandHandler = new CommandHandler();
        expect(commandHandler.parseCommand('LEFT')).toEqual({
          command: 'LEFT'
        });
      });
  
      it('should return command object for "RIGHT" command', () => {
        const commandHandler = new CommandHandler();
        expect(commandHandler.parseCommand('RIGHT')).toEqual({
          command: 'RIGHT'
        });
      });
  
      it('should return command object for "MOVE" command', () => {
        const commandHandler = new CommandHandler();
        expect(commandHandler.parseCommand('MOVE')).toEqual({
          command: 'MOVE'
        });
      });
  
      it('should return command object for "REPORT" command', () => {
        const commandHandler = new CommandHandler();
        expect(commandHandler.parseCommand('REPORT')).toEqual({
          command: 'REPORT'
        });
      });
    });
  });
  