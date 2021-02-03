const { PlaceCommand } = require('../../../command/PlaceCommand');
const { GridMatrix } = require('../../../model/GridMatrix');
const { Directions} = require('../../../constants/constants');
const { NORTH } = Directions;
const { Pacman } = require('../../../model/Pacman');

describe('PlaceCommand tests', () => {
  describe('Test handle', () => {

    it('should throw an error when there is no grid', () => {
      const pacman = new Pacman();
      const placeCommand = new PlaceCommand(pacman);
      expect(() => {
        placeCommand.handle();
      }).toThrowError('Please initialise a grid');
    });

    it('should throw an error when x outside grid dimension', () => {
      const pacman = new Pacman();
      const grid = new GridMatrix();
      const placeCommand = new PlaceCommand(pacman, grid);
      expect(() => {
        placeCommand.handle(10, 1, NORTH);
      }).toThrowError('Pacman is placed at an invalid place, please try again');
    });

    it('should throw an error when y outside grid dimension', () => {
      const pacman = new Pacman();
      const grid = new GridMatrix();
      const placeCommand = new PlaceCommand(pacman, grid);
      expect(() => {
        placeCommand.handle(1, 10, NORTH);
      }).toThrowError('Pacman is placed at an invalid place, please try again');
    });

    it('should place pacman at a valid position', () => {
      const pacman = new Pacman();
      const grid = new GridMatrix();
      const placeCommand = new PlaceCommand(pacman, grid);
      placeCommand.handle(1, 1, NORTH);

      expect(pacman.x).toEqual(1);
      expect(pacman.y).toEqual(1);
      expect(pacman.direction).toEqual(NORTH);
    });
  });
});
