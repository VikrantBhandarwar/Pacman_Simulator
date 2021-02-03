const { MoveCommand } = require('../../../command/MoveCommand');
const { GridMatrix } = require('../../../model/GridMatrix');
const { Directions} = require('../../../constants/constants');

describe('MoveCommand tests', () => {
  describe('Test handle method', () => {
    const { Pacman } = require('../../../model/Pacman');

    it('should throw an error when there is no pacman', () => {
      const moveCommand = new MoveCommand();
      expect(() => {
        moveCommand.handle();
      }).toThrowError('Please initialise a pacman');
    });

    it('should throw an error when there is no grid', () => {
      const pacman = new Pacman(1, 1, Directions.NORTH);
      const moveCommand = new MoveCommand(pacman);
      expect(() => {
        moveCommand.handle();
      }).toThrowError('Please initialise a grid');
    });

    it('should ignore when pacman to be moved outside NORTH edge', () => {
      const grid = new GridMatrix(5, 5);
      const pacman = new Pacman(0, 4, Directions.NORTH);
      const moveCommand = new MoveCommand(pacman, grid);

      expect(() => {
        moveCommand.handle();
      }).toThrowError('Invalid moving position');

      expect(pacman.x).toEqual(0);
      expect(pacman.y).toEqual(4);
    });

    it('should ignore when pacman to be moved outside EAST edge', () => {
      const grid = new GridMatrix(5, 5);
      const pacman = new Pacman(4, 0, Directions.EAST);
      const moveCommand = new MoveCommand(pacman, grid);

      expect(() => {
        moveCommand.handle();
      }).toThrowError('Invalid moving position');

      expect(pacman.x).toEqual(4);
      expect(pacman.y).toEqual(0);
    });

    it('should ignore when pacman to be moved outside SOUTH edge', () => {
      const pacman = new Pacman(0, 0, Directions.SOUTH);
      const grid = new GridMatrix(5, 5);
      const moveCommand = new MoveCommand(pacman, grid);

      expect(() => {
        moveCommand.handle();
      }).toThrowError('Invalid moving position');

      expect(pacman.x).toEqual(0);
      expect(pacman.y).toEqual(0);
    });

    it('should ignore when pacman to be moved outside WEST edge', () => {
      const pacman = new Pacman(0, 0, Directions.WEST);
      const grid = new GridMatrix(5, 5);
      const moveCommand = new MoveCommand(pacman, grid);

      expect(() => {
        moveCommand.handle();
      }).toThrowError('Invalid moving position');

      expect(pacman.x).toEqual(0);
      expect(pacman.y).toEqual(0);
    });

    it('should move to x + 1 when pacman facing EAST', () => {
      const pacman = new Pacman(1, 1, Directions.EAST);
      const grid = new GridMatrix(5, 5);
      const moveCommand = new MoveCommand(pacman, grid);

      moveCommand.handle();

      expect(pacman.x).toEqual(2);
      expect(pacman.y).toEqual(1);
    });

    it('should move to x - 1 when pacman facing WEST', () => {
      const pacman = new Pacman(1, 1,Directions.WEST);
      const grid = new GridMatrix(5, 5);
      const moveCommand = new MoveCommand(pacman, grid);

      moveCommand.handle();

      expect(pacman.x).toEqual(0);
      expect(pacman.y).toEqual(1);
    });

    it('should move to y + 1 when pacman facing NORTH', () => {
      const pacman = new Pacman(1, 1, Directions.NORTH);
      const grid = new GridMatrix(5, 5);
      const moveCommand = new MoveCommand(pacman, grid);

      moveCommand.handle();

      expect(pacman.x).toEqual(1);
      expect(pacman.y).toEqual(2);
    });

    it('should throw error when pacman facing invalid direction', () => {
      const pacman = new Pacman(1, 1, 'INVALID');
      const grid = new GridMatrix(5, 5);
      const moveCommand = new MoveCommand(pacman, grid);
      expect(() => {
        moveCommand.handle();
      }).toThrowError('Invalid pacman direction');
    });
  });
});
