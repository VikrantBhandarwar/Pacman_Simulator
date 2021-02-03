const { LeftCommand } = require('../../../command/LeftCommand');
const { Directions} = require('../../../constants/constants');
const { NORTH, EAST, SOUTH, WEST } = Directions;

describe('LeftCommand tests', () => {
  describe('Test handle', () => {
    const { Pacman } = require('../../../model/Pacman');

    it('should throw an error when there is no pacman', () => {
      const leftCommand = new LeftCommand();
      expect(() => {
        leftCommand.handle();
      }).toThrowError('Please initialise a pacman');
    });

    it('should throw an error when pacman has not been placed on grid', () => {
      const pacman = new Pacman();
      const leftCommand = new LeftCommand(pacman);
      expect(() => {
        leftCommand.handle();
      }).toThrowError('Pacman is not on grid, please run PLACE command first');
    });

    it('should turn to WEST when pacman current direction is NORTH', () => {
      const pacman = new Pacman(1, 2, NORTH);
      const leftCommand = new LeftCommand(pacman);
      leftCommand.handle();

      expect(pacman.direction).toEqual(WEST);
    });

    it('should turn to SOUTH when pacman current direction is WEST', () => {
      const pacman = new Pacman(1, 2, WEST);
      const leftCommand = new LeftCommand(pacman);
      leftCommand.handle();

      expect(pacman.direction).toEqual(SOUTH);
    });

    it('should turn to EAST when pacman current direction is SOUTH', () => {
      const pacman = new Pacman(1, 2, SOUTH);
      const leftCommand = new LeftCommand(pacman);
      leftCommand.handle();

      expect(pacman.direction).toEqual(EAST);
    });

    it('should turn to NORTH when pacman current direction is EAST', () => {
      const pacman = new Pacman(1, 2, EAST);
      const leftCommand = new LeftCommand(pacman);
      leftCommand.handle();

      expect(pacman.direction).toEqual(NORTH);
    });

    it('should throw error when pacman facing invalid direction', () => {
      const pacman = new Pacman(1, 2, 'Invalid');
      const leftCommand = new LeftCommand(pacman);

      expect(() => {
        leftCommand.handle();
      }).toThrowError('Invalid pacman direction');
    });
  });
});
